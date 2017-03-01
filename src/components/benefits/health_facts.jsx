import React, { Component } from 'react';

class HealthFacts extends Component {
  render(){
    return (
      <article className="column is-12 benefit-details container" id={this.props.benefit.toLowerCase()}>
        <h2 className="title is-2"><span className="accent">{this.props.benefit}</span> Benefits</h2>
        <dl>
          <dt>The harsh reality of today's water infrastructure is it often times contains all sorts of toxins.</dt>
          <dt>Across the country, we've found notable amounts of:</dt>
          <ul>
            <li className="bene-list-item">Pesticides</li>
            <li className="bene-list-item">Carcinogens</li>
            <li className="bene-list-item">Anti-depressants</li>
            <li className="bene-list-item">Birth control</li>
            <li className="bene-list-item last">And other pharmaceuticals</li>
          </ul>
          <dt>To make matters worse, the EPA can't keep up with the amount of toxins it has to analyze.</dt>
          <dt>For example, Creosote (found in coal tar) hasn't undergone the EPA's health assessment.</dt>
          <dt>What's even more scary is 25% of the time, bottle water is simply bottled tap water.</dt>
          <dt>It's been said that your body is 60% water. Why not opt for purified water?</dt>
        </dl>
        <footer>
          <small><cite>"A Rising Tide of Contaminants." New York Times, 25 Feb 2014</cite></small><br />
          <small><cite>"Scientists trace cancer-causing chemical in drinking water back to methadone." PBS, 27 May 2015</cite></small><br />
          <small><cite>"The Truth About Tap." NRDC, 05 Jan 2016</cite></small>
        </footer>
      </article>
    )
  }
}

export default HealthFacts;
