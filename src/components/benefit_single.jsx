import React, { Component } from 'react';

class Benefit extends Component {
  render(){
    return (
      <div className="column is-one-third" onClick={this.props.onClick}>
        <h2 className="title is-3"><span className="accent">{this.props.name}</span> Benefits</h2>
        <figure className="benefit-icon">
          <img src={"/src/images/" + this.props.name + "-bene-icon.png"} alt={this.props.alt} />
        </figure>
      </div>
    )
  }
}

export default Benefit;
