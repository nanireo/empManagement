import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const Navigation = () => {
    return (
      <ul style={ulStyle}>
        <li style={{ ...listItemStyle, marginLeft: 'auto' }}>
          <Link to="/Dashboard">
            <button style={buttonStyle}>Home</button>
          </Link>
        </li>
        <li style={listItemStyle}>
          <Link to="/EmployeeListPages">
            <button style={buttonStyle}>Employee List</button>
          </Link>
        </li>
        <li style={listItemStyle}>
          <Link to="/" >
            <button style={logoutButtonStyle}>Logout</button>
          </Link>
        </li>
      </ul>
    );
  };

  const ulStyle = {
    listStyle: 'none',
    display: 'flex',
    background: '#f0f0f0', 
    padding: '10px', 
  };

  const listItemStyle = {
    marginRight: '10px',
  };

  const buttonStyle = {
    padding: '5px 10px',
    background: 'none', 
    color: '#000', 
    border: 'none',
    cursor: 'pointer',
  };

  const logoutButtonStyle = {
    ...buttonStyle,
    // background: '#ff0000', 
  }
  return (
    
      <Navigation />
      
  );
};

export default Navbar;
