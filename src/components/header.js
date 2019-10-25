import React from 'react';

const Header = (props) => {

  return (
    <header>
      <h1>SQL Playground</h1>
      <p>This table is named <strong>shapes</strong> and has 2 columns: <strong>shape</strong> and <strong>color</strong> and supports all standard SQL Commands</p>
      <p>Reload the page to refresh the database.</p>
    </header>
  )

};

export default Header;