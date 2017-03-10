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
    const content = facts.map((fact, i) => {
      if (fact == '[[factlist]]'){
        return (
          factlist.map((supportingFact, i) => {
            return (
              <dt key={i} className="list-item">
                <i className="fa fa-tint" aria-hidden="true"></i>
                <span dangerouslySetInnerHTML={this.createMarkup(supportingFact)} />
              </dt>
            )
          })
        )
      }
      else {
        return (
          <dt key={i} dangerouslySetInnerHTML={this.createMarkup(fact)} />
        )
      }
    })

    return (
      <dl>{content}</dl>
    )
  }

  renderCitationSection(citations){
    return citations.map((citation, i)=>{
      return(
        <small key={i}><cite>{citation}</cite><br /></small>
      )
    })
  }

  renderCertSection(certs){
    const content = certs.map((cert, i) => {
      return (
        <figure key={i}>
          <a href={cert.url} target="_blank">
            <img src={"/src/images/" + cert.alias + "-logo.png"} alt={cert.alias + " logo"} />
          </a>
          <figcaption className="subtitle is-3">{cert.name}</figcaption>
        </figure>
      )
    })

    return (
      <div className="cert-wrapper">{content}</div>
    )
  }

  render(){
    const content = this.props.alias == 'certificates'
      ? this.renderCertSection(this.props.facts)
      : this.renderFactSection(this.props.facts, this.props.factlist);
    const classes = this.props.alias == 'certificates'
      ? "columm is-12 details-logo"
      : "column is-12 details is-multiline"
    const citation = this.renderCitationSection(this.props.citations);

    return (
      <article className={classes} id={this.props.alias}>
        {content}
        <footer>{citation}</footer>
      </article>
    )
  }
}

export default ContentDetails;
