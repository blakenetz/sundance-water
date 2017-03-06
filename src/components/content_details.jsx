import React, { Component } from 'react';

class ContentDetails extends Component {
  renderFactSection(facts, factlist){
    return facts.map((fact, i) => {
      if (fact == '[[factlist]]'){
        return (
          factlist.map((supportingFact, i) => {
            return (
              <dt key={i} className="list-item">{supportingFact}</dt>
            )
          })
        )
      } else {
        return (
          <dt key={i}>{fact}</dt>
        )
      }
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

    const facts = this.renderFactSection(this.props.facts, this.props.factlist);
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

export default ContentDetails;
