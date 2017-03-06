import React, { Component } from 'react';

import Icon from './icon';
import Details from './details';
import whyContent from '../content/detail_content';

class WhyKinetico extends Component {
  constructor(props){
    super(props)
    this.state = { targetReason: null };
  }
  handleClick(data){
    this.setState({
      targetReason: data.alias,
      targetId: data.id
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
      {
        id: 0,
        name: 'History',
        alt: 'handshake',
        alias: 'history',
        facts: [
          "In 1970, two engineers made history by developing a non-electric, fully automatic water treatment system.",
          "This engineering feat quickly lead to the creation of Kinetico Incorporate.",
          "Since then, Kinetico has become a global company, with their water experts serving over 100 countries.",
          "Innovative technology and a strong commitment to customer satisfaction have distinguished the company and positioned Kinetico as a leader in today's ever-changing water treatment industry.",
        ],
        factlist: [],
        citations: [],
      },
      {
        id: 1,
        name: 'Drinking Water Stations',
        alt: 'glass of water',
        alias: 'drinking-water',
        facts: [ "[[factlist]]" ],
        factlist: [
          "There are eight different cartridge options, including Perfecta (a microbiological guard against unwanted bacteria) and the Mineral Plus (which reintroduces beneficial minerals)",
          "QuickFlo Technology insures a strong flow from your faucets",
          ""
        ],
        citations: [],
      },
      {
        id: 2,
        name: 'Water Softeners',
        alt: 'water faucet',
        alias: 'softener',
        facts: [],
        factlist: [],
        citations: [],
      },
      {
        id: 3,
        name: 'Certificates',
        alt: 'award ribbon',
        alias: 'certificates',
        facts: [],
        factlist: [],
        citations: [],
      }
    ]
    const reasons = this.renderReasons(whyMap)

    return(
      <article className="why columns is-multiline" id="why-kinetico">
        {reasons}
        { this.state.targetReason !== null ? this.renderDetails(whyMap[this.state.targetId]) : null }
      </article>
    )
  }
}

export default WhyKinetico;
