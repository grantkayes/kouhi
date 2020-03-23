import React from 'react';
import './Navbar.css';
import img from './kofi.png'

function Navbar() {
  return (
    <div className="Navbar">
      <nav>
        <img src={img} height="30px" width="45px"/>
        <h1>kouhi</h1>
      </nav>
    </div>
  );
}

export default Navbar;
