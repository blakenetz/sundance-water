import React, { Component } from 'react';

class Benefit extends Component {
  render(){
    return (
      <div className="benefit column is-one-quarter" onClick={this.props.onClick}>
        <h2 className="title is-3"><span className="accent">{this.props.name}</span> Benefits</h2>
        <figure className="benefit-icon">
          <a href={"/#" + this.props.name.toLowerCase()}>
            <img src={"/src/images/" + this.props.name + "-bene-icon.png"} alt={this.props.imgAlt} />
          </a>
        </figure>
      </div>
    )
  }
}

export default Benefit;
