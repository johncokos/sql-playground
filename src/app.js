import React, {useState, useEffect} from 'react';
import alasql from 'alasql';

import Table from './components/table.js';
import Shapes from './components/shapes.js';
import Header from './components/header.js';

import './app.scss';

function App() {

  const [error,setError] = useState('');
  const [data,setData] = useState([]);
  const [sql,setSQL] = useState('');

  const makeQuery = (e) => {
    setSQL(e.target.value);
  };

  const runQuery = (e) => {
    e.preventDefault();

    if ( ! sql.match(/^(select|insert|update)/ig) ) {
      setError('Unspported SQL Statement');
      return;
    }

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

  const generateRandomData = () => {
    const shapes = ['circle','square','triangle'];
    const colors = ['green','pink','silver','aqua'];
    const starterData = [];

    for (let i=1; i <= 24; i++) {
      const shape = shapes[Math.floor(Math.random() * (shapes.length))];
      const color = colors[Math.floor(Math.random() * (colors.length))];
      starterData.push({shape,color});
    }

    return starterData;

  };

  useEffect( () => {
    alasql('CREATE TABLE shapes (id int AUTO_INCREMENT, shape string, color string)');
    let count = 0;
    const starterData = generateRandomData();
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
              <input name="sql" onChange={makeQuery} />
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
