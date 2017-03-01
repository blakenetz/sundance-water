import React, { Component } from 'react';

class Icon extends Component {
  render(){
    return (
      <section className="icon column is-one-quarter" onClick={this.props.onClick}>
        <h2 className="title is-3 accent">{this.props.name}</h2>
        <figure>
          <a href={"/#" + this.props.alias}>
            <img src={"/src/images/" + this.props.alias + "-icon.png"} alt={this.props.alt} />
          </a>
        </figure>
      </section>
    )
  }
}

export default Icon;
