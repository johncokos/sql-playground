import React from 'react';

const Table = (props) => {

  const data = props.data || [];

  return (
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Shape</th>
        <th>Color</th>
      </tr>
      </thead>
      <tbody>
      {
        data.map( (item,i) =>
          <tr key={i}><td>{item.id}</td><td>{item.shape}</td><td>{item.color}</td></tr>
        )
      }
      </tbody>
    </table>
  )

};

export default Table;
