import React, { Component } from 'react';
import BenefitDetails from './benefit_details';

class Benefits extends Component {
  constructor(props){
    super(props)
    this.state = { showDetails: false }
    this.handleClick = this.handleClick.bind(this)
    this.benefits = this.props.categories
  }

  handleClick(){
    this.setState({ showDetails: true });
  }

  render(){
    let benefitCat = this.benefits.map((el, i) => {
      return (
        <div className={el.title + " column is-one-third"} onClick={this.handleClick} key={"benefit-"+i}>
          <h2 className="title is-3"><span className="accent">{el.title}</span> Benefits</h2>
          <figure className="benefit-icon">
            <img src={"/src/images/" + el.title + "-bene-icon.png"} alt={el.alt} />
          </figure>
        </div>
      )
    })
    return (
      <div className="benefits">
        <div className="diagonal"></div>
        <div className="benefits-inner columns">
          {benefitCat}
        </div>
        { this.state.showDetails ? <BenefitDetails /> : null }
      </div>
    )
  }
}

export default Benefits;
