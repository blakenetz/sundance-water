import React, { Component } from 'react'

class LandingPage extends Component {
  render(){
    return (
      <div className="landing-page">
          <h2 className="landing-text title is-2">
            <span className="accent">Water</span> is the secret to good <span className="accent">health</span>, glowing <span className="accent">skin</span>, and delicious <span className="accent">food</span>.
            Learn how purified water can better your life.
          </h2>
          <h3 className="landing-request subtitle is-2"><a href="#">Request your free quote now</a></h3>
      </div>
    )
  }
}

export default LandingPage;
