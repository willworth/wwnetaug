import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const Contact = () => (
  <Layout>
    <h1>Hi</h1>
    <p>Contact details will appear here.</p>
    <p>For now, there's <a href="https://twitter.com/willworth">Twitter</a></p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Contact
