import React from 'react';
import { Link } from 'gatsby';

const linkStyle = {
    color: 'white',
    display: 'inline-block',
    margin: '0 0.5rem',
    padding: '0.25rem',
    textDecoration: 'none'
};

const TabLink = ({ children, to }) => (
    <Link to={to} style={linkStyle}>
        {children}
    </Link>
);

export default TabLink; 