import React, { Component } from 'react';
import Icon from './icon';

class WhyKinetico extends Component {
  handleClick(data){
    this.setState({
      targetBenefit: data.name
    });
  }

  renderReasons(reasons){
    return reasons.map((reasonData, i) => {
      return (
        <Icon key={i}
                 name={reasonData.name}
                 alt={reasonData.alt}
                 alias={reasonData.alias}
                 onClick={this.handleClick.bind(this, reasonData)} />
      )
    })
  }

  render(){
    const whyMap = [
      {name: 'History', alt: 'handshake', alias: 'history'},
      {name: 'Drinking Water Stations', alt: 'glass of water', alias: 'drinking-water'},
      {name: 'Water Softeners', alt: 'water faucet', alias: 'softener'},
      {name: 'Certificates', alt: 'award ribbon', alias: 'certificates'}
    ]
    const reasons = this.renderReasons(whyMap)

    return(
      <article className="why columns is-multiline" id="why-kinetico">
        {reasons}
      </article>
    )
  }
}

export default WhyKinetico;
