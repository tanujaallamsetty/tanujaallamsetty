import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SPnavbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <a href='https://www.google.com'>google</a>
        <Link to="/">SPhome</Link>
        <Link to="/SPabout">SPabout</Link>
        <Link to="/SPcontactus">SPcontactus</Link>
        <Link to="/TableComponent">TableComponent</Link>
        <Link to="/Registration">Registration</Link>
        <Link to="/Login">Login</Link>
        
      </div>
    );
  }
}


export default SPnavbar;
