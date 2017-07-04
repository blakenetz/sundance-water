import React, { Component } from 'react';
import jump from 'jump.js'

class PH extends Component {

  componentDidMount(){
    jump('.info-block')
  }

  render(){
    return (
      <article className="info-block">
        <div className="container">
          <p>Over the past 12 years, Sundance Plumbing & Heating has become one of the premiere plumbing & heating company in the Vail Valley.</p>
          <p>Our list of over 2,000 customers vary from residential to large commercial projects, including the Vail Valley Medical Center and the Solaris.</p>
          <p>Please give us a call at <a href="tel:9707488977">970-748-8977</a> with all of your Plumbing & Heating needs!</p>
        </div>
      </article>
    )
  }
}

export default PH;
