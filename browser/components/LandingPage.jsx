import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => (
  <div className="home">
    <div className="text container">
      <h1>SidesTender!</h1>
    </div>
    <p>
      SidesTender helps you manage your scripts and your auditions, all in one app. Trouble memorizing your lines? We can help. Trouble keeping track of your auditions and follow-up? We can help.  Roommate out of town, and you need someone to run lines with? We can help. Don't let the room be the first place you say your lines out loud. Connect with your peers or a coach of your choosing.
    </p>
    <p>
      Let's begin, shall we?
    </p>
    <div>
      <Link to="/">Manage Scripts</Link>
      <Link to="/call">Start a session</Link>
      <Link to="/">Memorization Tools</Link>
    </div>

  </div>
);

export default LandingPage
