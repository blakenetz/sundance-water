import React, { Component } from 'react';

import Icon from '../icon';
import EcoFacts from './eco_facts';
import HealthFacts from './health_facts';
import TasteFacts from './taste_facts';
import TouchFacts from './touch_facts';

class Benefits extends Component {
  constructor(props){
    super(props)
    this.state = { targetBenefit: null }
    this.renderBenefits = this.renderBenefits.bind(this)
  }

  handleClick(data){
    this.setState({
      targetBenefit: data.name
    });
  }

  renderBenefits(benefits){
    return benefits.map((benefitData, i) => {
      return (
        <Icon key={i}
                 name={benefitData.name}
                 alt={benefitData.alt}
                 alias={benefitData.alias}
                 onClick={this.handleClick.bind(this, benefitData)} />
      )
    })
  }

  render(){
    const benefitMap = [
      {name: 'Health', alt: 'standing doctor', alias: 'health'},
      {name: 'Environmental', alt: 'hands holding a sprout', alias: 'eco'},
      {name: 'Taste', alt: 'bowl of salad', alias: 'taste'},
      {name: 'Touch', alt: 'skin products', alias: 'touch'}
    ]
    const benefits = this.renderBenefits(benefitMap)

    return (
      <article className="benefits columns is-multiline" id="benefits">
        {benefits}
        { this.state.targetBenefit == 'Eco' ? <EcoFacts  benefit={this.state.targetBenefit} /> : null }
        { this.state.targetBenefit == 'Health' ? <HealthFacts  benefit={this.state.targetBenefit} /> : null }
        { this.state.targetBenefit == 'Taste' ? <TasteFacts  benefit={this.state.targetBenefit} /> : null }
        { this.state.targetBenefit == 'Touch' ? <TouchFacts  benefit={this.state.targetBenefit} /> : null }
      </article>
    )
  }
}

export default Benefits;
