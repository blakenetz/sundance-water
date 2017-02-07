import React, { Component } from 'react'

class LandingPage extends Component {
  render(){
    return (
      <div className="landing-page">
        <div className="cover-image">
          <div className="catch-text">
            <h1 className="title is-1">Water is life</h1>
            <h2 className="subtitle is-2">It's time to start thinking about making a change</h2>
          </div>
          <h2 className="subtitle is-2"><a>Receive your free quote today</a></h2>
        </div>
        <div className="triangle"></div>

      </div>
    )
  }
}

export default LandingPage;
