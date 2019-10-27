import React, {useState, useEffect} from 'react';
import alasql from 'alasql';

import Table from './components/table.js';
import Shapes from './components/shapes.js';
import Header from './components/header.js';

import './design/app.scss';

function App() {

  const [error,setError] = useState('');
  const [data,setData] = useState([]);
  const [sql,setSQL] = useState('');

  const makeQuery = (e) => {
    setSQL(e.target.value);
  };

  const runQuery = (e) => {
    e.preventDefault();

    if ( ! sql.trim().match(/^(select|insert|update|delete)/ig) ) {
      setError('Unspported SQL Statement');
      return;
    }

    sql.replace(';', '');

    alasql.promise(sql)
      .then( result => {
        if ( sql.match(/^select/i) ) {
          setData(result);
          setError('');
        }
        else {
          getAllRecords();
        }
      })
      .catch( err => setError(err.message) );
  };

  const getAllRecords = () => {
    setData( alasql('SELECT * FROM shapes') );
    setError('');
  };

  const generateStarterData = () => {
    const shapes = ['circle','square','triangle','oval', 'rectangle'];
    const colors = ['green','pink','silver','aqua'];
    const starterData = [];

    for (let i=0; i < shapes.length; i++) {
      const shape = shapes[i];
      for(let x=0; x < colors.length; x++) {
        const color = colors[x];
        starterData.push({shape,color});
      }
    }

    return starterData;

  };

  useEffect( () => {
    const starterData = generateStarterData();
    alasql('CREATE TABLE shapes (id int AUTO_INCREMENT, shape string, color string)');
    starterData.forEach( shape => {
      alasql(`INSERT INTO shapes (shape,color) VALUES ("${shape.shape}", "${shape.color}" )`);
    });
    getAllRecords();
  }, []);

  return (
    <main>
      <Header />
      <section>
        <div>
          <div className="form">
            <form onSubmit={runQuery}>
              <input name="sql" placeholder="SQL Statement..." onChange={makeQuery} />
            </form>
            <div className="error">{error}</div>
          </div>
          <Shapes data={data} />
        </div>
        <Table data={data} />
      </section>
    </main>
  );
}

export default App;
