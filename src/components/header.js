import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: '#022715',
      marginBottom: `1.45rem`,
      opacity: 0.8,
    }}
  >
    <div
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
      </h1>
      <br></br>
      <button>
        <p>Taqueria menu <Link to="/page-2"> </Link></p>
      </button>
      <button>Contact Us</button>
      <button>About Us</button>
      <button>Our Locations</button>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
