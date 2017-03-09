import React, { Component } from 'react';

class ContentDetails extends Component {
  constructor(props){
    super(props);
    this.state = { VisibleElement: this.props.alias }
  }

  componentWillReceiveProps(){
    this.setState((previousState, currentProps) => {
      return { ...previousState, VisibleElement: currentProps.alias };
    });
  }

  createMarkup(htmlString){
    return {__html: htmlString};
  }

  renderFactSection(facts, factlist){
    return facts.map((fact, i) => {
      if (fact == '[[factlist]]'){
        return (
          factlist.map((supportingFact, i) => {
            return (
              <dt key={i} className="list-item" dangerouslySetInnerHTML={this.createMarkup(supportingFact)} />
            )
          })
        )
      } else {
        return (
          <dt key={i} dangerouslySetInnerHTML={this.createMarkup(fact)} />
        )
      }
    })
  }

  renderCitationSection(citations){
    return citations.map((citation, i)=>{
      return(
        <small key={i}><cite>{citation}</cite><br /></small>
      )
    })
  }

  render(){
    const facts = this.renderFactSection(this.props.facts, this.props.factlist);
    const citation = this.renderCitationSection(this.props.citations);
    const title = ['health', 'eco', 'taste', 'touch'].includes(this.state.VisibleElement)
      ? <h2 className="title is-2"><span className="accent">{this.props.name}</span> Benefits</h2>
      : <h2 className="title is-2"><span className="accent">{this.props.name}</span></h2>

    return (
      <article className="column is-12 details" id={this.props.alias}>
          {title}
          <dl>{facts}</dl>
          <footer>{citation}</footer>
      </article>
    )
  }
}

export default ContentDetails;
