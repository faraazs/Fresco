import React from 'react';
import { Link } from 'gatsby';

const navbuttonStyle = {
    background: '#DADED4',
    color: 'black',
    border: '.15rem solid #bdc7ad',
    borderRadius: '3rem',
    display: 'inline-block',
    margin: '0.5rem 0.25rem 0rem 0.25rem',
    padding: '0.5rem 0.5rem 0.5rem 0.5rem',
    textDecoration: 'none',
    fontSize: '1.25rem',
  };
  
  const navbuttonActiveStyle = {
    background: '#bdc7ad',
    color: 'black',
    display: 'inline-block',
    margin: '0.5rem 0.25rem 0rem 0.25rem',
    padding: '0.5rem 0.5rem 0.5rem 0.5rem',
    textDecoration: 'none',
    fontSize: '1.25rem',
    false: '1rem'

  };
  
  const NavButton = ({ children, to }) => (
    <Link to={to} style={navbuttonStyle} activeStyle={navbuttonActiveStyle}>
        {children}
    </Link>
  );

export default NavButton; 