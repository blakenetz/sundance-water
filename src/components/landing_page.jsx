import React, { Component } from 'react'

class LandingPage extends Component {
  render(){
    return (
      <div className="landing-page container">
        <header>
          <figure className="image">
            <img  id="logo"
                  src="/src/images/logo.png"
                  alt="sundance-logo" />
          </figure>
        </header>
        <div className="landing-page-inner">
          <div className="landing-text-wrapper">
            <h2 className="landing-text title is-2">
              <span className="accent">Water</span> is the secret to good <span className="accent">health</span>, glowing <span className="accent">skin</span>, and delicious <span className="accent">food</span>.
              Learn how purified water can improve your life.
            </h2>
            <h3 className="landing-text title is-2">Scroll down to learn more</h3>
            <h4 className="landing-request title is-2"><a href="#contact">Or request your <span className="accent">free quote</span> now</a></h4>
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage;
