import React, { Component } from 'react';

import Benefit from './benefit_single';
import EcoFacts from './eco_facts';
import HealthFacts from './health_facts';
import TasteFacts from './taste_facts';
import TouchFacts from './touch_facts';

class Benefits extends Component {
  constructor(props){
    super(props)
    this.state = {
      targetBenefit: null
    }
    this.renderBenefits = this.renderBenefits.bind(this)
  }

  handleClick(data, e){
    this.setState({
      targetBenefit: data.name
    });
  }

  renderBenefits(benefits){
    return benefits.map((benefitData, i) => {
      return (
        <Benefit key={i}
                 name={benefitData.name}
                 imgAlt={benefitData.alt}
                 onClick={this.handleClick.bind(this, benefitData)} />
      )
    })
  }

  render(){
    const benefitMap = [
      {name: 'Health', alt: 'standing doctor'},
      {name: 'Eco', alt: 'hands holding a sprout'},
      {name: 'Taste', alt: 'bowl of salad'},
      {name: 'Touch', alt: 'skin products'}
    ]
    const benefits = this.renderBenefits(benefitMap)

    return (
      <div className="benefits">
        <div className="diagonal"></div>
        <div className="benefits-inner columns">
          {benefits}
        </div>
        { this.state.targetBenefit == 'Eco' ? <EcoFacts  benefit={this.state.targetBenefit} /> : null }
        { this.state.targetBenefit == 'Health' ? <HealthFacts  benefit={this.state.targetBenefit} /> : null }
        { this.state.targetBenefit == 'Taste' ? <TasteFacts  benefit={this.state.targetBenefit} /> : null }
        { this.state.targetBenefit == 'Touch' ? <TouchFacts  benefit={this.state.targetBenefit} /> : null }
      </div>
    )
  }
}

export default Benefits;
