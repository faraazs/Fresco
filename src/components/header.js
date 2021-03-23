import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import tablink from '../components/navigation';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: '#022715',
      marginBottom: `1.45rem`,
      opacity: 0.8,
    }}
  >
    <nav
      style={{
        borderColor: 'white',
        margin: `0 auto`,
        maxWidth: 960,  
        padding: `1.45rem 1.0875rem`,
        textAlign: 'center',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            borderColor: 'white',
            color: `#ff7800`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
        <Link to="/page-2">page-2</Link>
        <br></br>
        <tablink to="/page-2">page-2</tablink>
      </h1>
      <tablink to="/page-2">page-2</tablink>
      <br></br>  
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
