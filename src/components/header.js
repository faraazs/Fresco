import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import NavButton from './NavTab';


const Header = ({ siteTitle }) => (
  <header id="headerheader"
    style={{
      background: '#DADED4',
      marginBottom: 0,
    }}
  >
    <nav
      style={{
        borderColor: 'white',
        margin: `0 auto`,
        maxWidth: 960,  
        padding: `0 0 0.5rem 0`,
        textAlign: 'center',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            borderColor: 'white',
            color: `orange`,
            textDecoration: `none`,
          }}
          >
          {siteTitle}
          </Link>
        <br></br>
        <NavButton to="/menu">Menu</NavButton>
        <NavButton to="/deals">Deals</NavButton>
        <NavButton to="/aboutus">About Us</NavButton>
        <NavButton to="/locations">Find Us</NavButton>
      </h1>
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
