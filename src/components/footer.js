import React from 'react'
import { Link } from 'gatsby'

const Footer = ({ siteTitle }) => (
  <div
    style={{
      background: '#33261d',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h4 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
              float: 'right',
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h4>
    </div>
    <div style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '.5rem 1.0875rem',
      }}>
    <Link to="/contact/">Contact</Link>
    </div>
  </div>
)

export default Footer
