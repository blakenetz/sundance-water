import React, { Component } from 'react';

class TasteFacts extends Component {
  render(){
    return (
      <article className="column benefit-details" id={this.props.benefit.toLowerCase()}>
        <h2 className="title is-2"><span className="accent">{this.props.benefit}</span> Benefits</h2>
        <dl>
          <dt>When cooking with purified water, you don't introduce impurities to your dish.</dt>
          <dt>This means flavors aren't being masked by tap water.</dt>
          <dt>As a bonus, you're cookware will thank you, since you'll no longer be subjecting them to the harshness of tap water.</dt>
          <dt>Clean water = tastier food. It's just that simple.</dt>
        </dl>
      </article>
    )
  }
}

export default TasteFacts;
