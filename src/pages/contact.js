import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const Contact = () => (
  <Layout>
    <h1>Hi...</h1>
    <p>I'd love to hear from you.  Feedback, criticism, suggestions.  Whatever.  Choose your weapon:</p>


    <p>There's <a href="https://twitter.com/willworth">twitter</a></p>
    <p>and <a href="https://www.youtube.com/user/WillWorthMusic">youtube</a> (Lots of video coming)</p>
    <p>and <a href="http://www.instagram.com/will.worth">instagram</a>.</p>


  <p>There's even a <a href="https://www.facebook.com/willworthmusic">facebook page</a>.</p> 
<p>I'm switching up email stuff, but for now you can use willworthmusic at gmail dot com</p>
<p>

“Tis in ourselves that we are thus or thus. Our bodies are our gardens to the which our wills are gardeners.”―William Shakespeare, 
<a href="http://www.shakespeare-online.com/plays/othello_1_3.html"> Othello</a>

</p>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Contact
