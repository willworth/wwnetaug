import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const Contact = () => (
  <Layout>
    <h1>Hi...</h1>
    <p>I'd love to hear from you.  Feedback, questions, suggestions-  Whatever.  When you start putting stuff 
      out there, it's easy to feel you're shouting into the void, so I really mean it when I say I'd love to hear 
      from you.  Choose your weapon:</p>

<p>I'm switching up email stuff, but for now you can use willworthmusic at gmail dot com.</p>
    <p>There's <a href="http://www.instagram.com/will.worth">instagram</a> and
     <a href="https://twitter.com/willworth"> twitter</a>. Neither of which send me a notifcation...</p>
    <p><a href="https://www.youtube.com/user/WillWorthMusic/?sub_confirmation=1">Youtube</a> is where I'm going to focus. Please consider subscribing!</p>


  <p>There's even a <a href="https://www.facebook.com/willworthmusic">facebook page</a>.</p> 
  <p>Whatever you choose, don't overthink it.  I look forward to hearing from you.  :)</p>

<p>

“Tis in ourselves that we are thus or thus. Our bodies are our gardens to the which our wills are gardeners.”―William Shakespeare, 
<a href="http://www.shakespeare-online.com/plays/othello_1_3.html"> Othello</a>

</p>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Contact
