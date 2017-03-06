import React, { Component } from 'react';

import Icon from './icon';
import ContentDetails from './content_details';

class Content extends Component {
  constructor(props){
    super(props)
    this.state = {
      targetSection: this.props.section,
      targetSubSection: null,
      targetId: null,
    }
    this.renderIcon = this.renderIcon.bind(this)
    this.renderDetails = this.renderDetails.bind(this)
  }

  componentWillReceiveProps(){
    this.setState((previousState, currentProps) => {
      return { ...previousState, targetSection: currentProps.section };
    });
  }

  handleClick(data){
    this.setState({
      targetSubSection: data.alias,
      targetId: data.id
    });
  }

  renderIcon(section){
    return section.map((sectionData, i) => {
      return (
        <Icon key={i}
               name={sectionData.name}
               alt={sectionData.alt}
               alias={sectionData.alias}
               onClick={this.handleClick.bind(this, sectionData)} />
      )
    })
  }

  renderDetails(subSection){
    return (
      <ContentDetails name={subSection.name}
                alias={subSection.alias}
                facts={subSection.facts}
                factlist={subSection.factlist}
                citations={subSection.citations}
      />
    )
  }

  render(){
    const contentMap = {
      benefits: [
        {
          id: 0,
          name: 'Health',
          alt: 'standing doctor',
          alias: 'health',
          facts: [
            "The harsh reality of today's water infrastructure is it often times contains all sorts of toxins.",
            "Across the country, we've found notable amounts of:",
            "[[factlist]]",
            "To make matters worse, the EPA can't keep up with the amount of toxins it has to analyze.",
            "For example, Creosote (found in coal tar) hasn't undergone the EPA's health assessment.",
            "What's even more scary is 25% of the time, bottle water is simply bottled tap water.",
            "It's been said that your body is 60% water. Why not opt for purified water?",
          ],
          factlist: [
            "Pesticides",
            "Carcinogens",
            "Anti-depressants",
            "Birth control",
          ],
          citations: [
            '"A Rising Tide of Contaminants." New York Times, 25 Feb 2014',
            '"Scientists trace cancer-causing chemical in drinking water back to methadone." PBS, 27 May 2015',
            '"The Truth About Tap." NRDC, 05 Jan 2016',
          ],
        },
        {
          id: 1,
          name: 'Environmental',
          alt: 'hands holding a sprout',
          alias: 'eco',
          facts: [
            'The bottle water industry relies heavily on oil for every step of the bottles lifecycle.',
            'This reliance comes with a cost: manufactoring alone is responsible for at least 17 million barrels of oil annually.',
            "This translates to around 25 million tons of CO<sub>2</sub>.",
            "What's worse is bottled water accounts for 4 billion pounds of trash annually.",
            "And it's estimated that only 20% of all bottled water is recycled.",
            "It's safe to say the Earth will thank you for making the switch to a Sundance purified water system.",
          ],
          factlist: [],
          citations: [
            '"Bottled Water and Energy Fact Sheet." <i>Pacific Institute</i>, Feb 2007',
          ],
        },
        {
          id: 2,
          name: 'Taste',
          alt: 'bowl of salad',
          alias: 'taste',
          facts: [
            "When cooking with purified water, you don't introduce impurities to your dish.",
            "This means flavors aren't being masked by tap water.",
            "As a bonus, you're cookware will thank you, since you'll no longer be subjecting them to the harshness of tap water.",
            "Clean water = tastier food. It's just that simple.",
          ],
          factlist: [],
          citations: [],
        },
        {
          id: 3,
          name: 'Touch',
          alt: 'skin products',
          alias: 'touch',
          facts: [
            "Put the creams and lotion back on the shelf.",
            "Dechlorinated water means your skin and will no longer be punished every time you shower or wash dishes.",
            "Better yet, using soft water in your laundry makes for brighter colors and whiter whites.",
            "By removing contaminants, your detergents will be more effective.",
            "The secret to softer, more vibrant clothes and healther skin is in your water.",
          ],
          factlist: [],
          citations: [],
        }
      ],
      why: [
        {
          id: 0,
          name: "History",
          alt: "handshake",
          alias: "history",
          facts: [
            "In 1970 two engineers made history by developing a non-electric, fully automatic water treatment system.",
            "This enineering feat quickly lead to the creation of Kinetico Incorporate.",
            "Since then, Kinetico has become a global company, with their water experts serving over 100 countries.",
            "Innovative technology and a strong commitment to customer satisfaction have distinguished the company and positioned Kinetico as a leader in today's ever-changing water treatment industry.",
          ],
          "factlist": [],
          "citations": [],
        },
        {
          id: 1,
          name: "Drinking Water Stations",
          alt: "glass of water",
          alias: "drinking-water",
          facts: [ "[[factlist]]" ],
          factlist: [
            "There ae eight different cartridge options, including Perfecta (a microbiological guard against unwanted bacteria) and the Mineral Plus (which reintroduces beneficial minerals)",
            "QuickFlo Technology insures a strong flow from your faucets",
            ""
          ],
          "citations": [],
        },
        {
          id: 2,
          name: "Water Softeners",
          alt: "water faucet",
          alias: "softener",
          facts: [],
          factlist: [],
          citations: [],
        },
        {
          id: 3,
          name: "Certificates",
          alt: "award ribbon",
          alias: "certificates",
          facts: [],
          factlist: [],
          citations: [],
        }
      ],
    }

    console.log('in render:', contentMap[this.state.targetSection])

    return (
      <article className="benefits columns is-multiline" id="benefits">
        { this.renderIcon(contentMap[this.state.targetSection]) }
        { this.state.targetSubSection !== null ? this.renderDetails(contentMap[this.state.targetSection][this.state.targetId]) : null }
      </article>
    )
  }
}

export default Content;
