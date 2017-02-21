import React, { Component } from 'react';

import Benefit from './benefit_single';
import BenefitDetails from './benefit_details';

class Benefits extends Component {
  constructor(props){
    super(props)
    this.state = { showDetails: false }
    this.handleClick = this.handleClick.bind(this)
    this.renderBenefits = this.renderBenefits.bind(this)
  }

  handleClick(){
    this.setState({ showDetails: true });
  }

  renderBenefits(benefits){
    return benefits.map((benefit, i) => {
      return (
        <Benefit key={i} name={benefit.name} imgAlt={benefit.alt} onClick={this.handleClick} />
      )
    })
  }

  render(){
    const benefitMap = [
      {name: 'Health', alt: 'standing doctor'},
      {name: 'Eco', alt: 'hands holding a sprout'},
      {name: 'taste', alt: 'bowl of salad'}
    ]
    const benefits = this.renderBenefits(benefitMap)

    return (
      <div className="benefits">
        <div className="diagonal"></div>
        <div className="benefits-inner columns">
          {benefits}
        </div>
        { this.state.showDetails ? <BenefitDetails /> : null }
      </div>
    )
  }
}

export default Benefits;
