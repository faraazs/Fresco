import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import TabLink from '../components/navigation';

//

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
            color: `orange`,
            textDecoration: `none`,
          }}
          >
          {siteTitle}
          </Link>
        <br></br>
        <TabLink to="/page-2">page-2</TabLink>
        <TabLink to="/menu">Menu</TabLink>
        <TabLink to="/deals">Deals</TabLink>
        <TabLink to="/aboutus">About Us</TabLink>
        <TabLink to="/locations">Our Locations</TabLink>
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
