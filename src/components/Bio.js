import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Will Worth`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Written by <strong>Will Worth</strong>, an English musician and writer who lives
           and works in Alicante.{' '} <br></br>
           Say 'Hi' on <a href="https://twitter.com/willworth">twitter </a>
            <a href="http://www.instagram.com/will.worth">instagram</a>
             or <a href="https://www.facebook.com/willworthmusic">facebook</a>.
        </p>
      </div>
    )
  }
}

export default Bio
