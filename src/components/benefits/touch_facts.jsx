import React, { Component } from 'react';

class TouchFacts extends Component {
  render(){
    return (
      <article className="column benefit-details" id={this.props.benefit.toLowerCase()}>
        <h2 className="title is-2"><span className="accent">{this.props.benefit}</span> Benefits</h2>
        <dl>
          <dt>Put the creams and lotion back on the shelf.</dt>
          <dt>Dechlorinated water means your skin and will no longer be punished every time you shower or wash dishes.</dt>
          <dt>Better yet, using soft water in your laundry makes for brighter colors and whiter whites.</dt>
          <dt>By removing contaminants, your detergents will be more effective.</dt>
          <dt>The secret to softer, more vibrant clothes and healther skin is in your water.</dt>
        </dl>
      </article>
    )
  }
}

export default TouchFacts;
