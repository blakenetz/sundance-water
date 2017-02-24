import React, { Component } from 'react';

class EcoFacts extends Component {
  render(){
    return (
      <article className="column benefit-details" id={this.props.benefit.toLowerCase()}>
          <h2 className="title is-2"><span className="accent">{this.props.benefit}</span> Benefits</h2>
          <dl>
            <dt>The bottle water industry relies heavily on oil for every step of the bottles lifecycle.</dt>
            <dt>This reliance comes with a cost: manufactoring alone is responsible for at least 17 million barrels of oil annually.</dt>
            <dt>This translates to around 25 million tons of CO<sub>2</sub>.</dt>
            <dt>What's worse is bottled water accounts for 4 billion pounds of trash annually.</dt>
            <dt>And it's estimated that only 20% of all bottled water is recycled.</dt>
            <dt>It's safe to say the Earth will thank you for making the switch to a Sundance purified water system.</dt>
          </dl>
          <footer>
            <small><cite>"Bottled Water and Energy Fact Sheet." <i>Pacific Institute</i>, Feb 2007</cite></small>
          </footer>
      </article>
    )
  }
}

export default EcoFacts;
