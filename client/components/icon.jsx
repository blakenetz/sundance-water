import React, { Component } from 'react';

class Icon extends Component {
  render(){
    const h2Class = this.props.active ? 'title is-3 accent active' : 'title is-3 accent';
    return (
      <section className="icon-wrapper column is-one-quarter" onClick={this.props.onClick} >
        <figure>
          <img src={"/images/" + this.props.alias + "-icon.png"} alt={this.props.alt} />
        </figure>
        <h2 className={h2Class}>{this.props.name}</h2>
      </section>
    )
  }
}

export default Icon;
