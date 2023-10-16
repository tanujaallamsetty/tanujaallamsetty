// // Navbar.js

import React, { useState } from 'react';


const Navbar = ({ setActivePage }) => {
  return (
    <nav className="navbar">
      <button onClick={() => setActivePage('home')}>Home</button>
      <button onClick={() => setActivePage('contact')}>Contact Us</button>
    </nav>
  );
};

export default Navbar;



