import React, { Component } from 'react';

import IconRow from './icon_row';
import Testimonials from './testimonials';
import PH from './ph';

class MainContent extends Component {
  constructor(props) {
    super(props)
    this.state = { visibleItem: 'benefits' }
  }

  handleClick(navItem){
    this.setState({ visibleItem: navItem.alias });
  }

  renderNav(navMap){
    return navMap.map((navItem, i) => {
      let classes = this.state.visibleItem == navItem.alias
        ? "subtitle is-3 nav-item active"
        : "subtitle is-3 nav-item"

      return (
        <h2 className={classes}
            key={i}
            onClick={this.handleClick.bind(this, navItem)} >
          <a href={"#"+navItem.alias}>{navItem.name}</a>
        </h2>
      )
    });
  }

  renderBenefitsWhySection(navItem){
    return (
      <IconRow section={navItem} onClick={this.handleClick.bind(this, navItem)} />
    )
  }

  renderTestimonialSection(){
    return (
      <Testimonials />
    )
  }

  renderPHSection(){
    return (
      <PH />
    )
  }

  render(){
    const navMap = [
      {
        id: 0,
        name: 'Benefits',
        alias: 'benefits',
      },
      {
        id: 1,
        name: 'Why Kinetico',
        alias: 'why',
      },
      {
        id: 2,
        name: 'Testimonials',
        alias: 'testimonials',
      },
      {
        id: 3,
        name: 'Plumbing and Heating Services',
        alias: 'ph-services',
      },
      {
        id: 4,
        name: 'Contact',
        alias: 'contact',
      },
    ]
    const Nav = this.renderNav(navMap);

    return (
      <section className='main-content'>
        <article className="nav container">
          {Nav}
        </article>
        { (this.state.visibleItem == 'benefits' || this.state.visibleItem == 'why') ? this.renderBenefitsWhySection(this.state.visibleItem) : null }
        { this.state.visibleItem == 'testimonials' ? this.renderTestimonialSection() : null }
        { this.state.visibleItem == 'ph-services' ? this.renderPHSection() : null }

      </section>
    )
  }
}

export default MainContent
