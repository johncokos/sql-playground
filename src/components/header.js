import React from 'react';

const Header = (props) => {

  return (
    <header>
      <h1>SQL Playground</h1>
      <div>
        <p>This table is named <strong>shapes</strong> and has 3 columns: <strong>id</strong>, <strong>shape</strong> and <strong>color</strong></p>
        <p>The app supports SELECT, INSERT, UPDATE, DELETE Statements (no ';' chaining)</p>
        <p>Reload the page to refresh the database.</p>
      </div>
    </header>
  );

};

export default Header;
