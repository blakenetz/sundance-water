import React, { Component } from 'react';

class Details extends Component {
  renderFactSection(facts){
    return facts.map((fact, i) => {
      return (
        <dt key={i}>{fact}</dt>
      )
    })
  }

  renderCitationSection(citations){
    return citations.map((citation, i)=>{
      return(
        <small key={i}><cite>{citation}</cite></small>
      )
    })
  }

  render(){

    const facts = this.renderFactSection(this.props.facts);
    const citation = this.renderCitationSection(this.props.citations);
    return (
      <article className="column is-12 details container" id={this.props.alias}>
          <h2 className="title is-2"><span className="accent">{this.props.name}</span> Benefits</h2>
          <dl>{facts}</dl>
          <footer>{citation}</footer>
      </article>
    )
  }
}

export default Details;
