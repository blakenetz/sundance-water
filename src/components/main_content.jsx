import React, { Component } from 'react';

import Benefits from './benefits/benefits'
import WhyKinetico from './why_kinetico'

class MainContent extends Component {
  constructor(props) {
    super(props)
    this.state = { visibleNavItem: 'benefits' }
  }

  handleClick(navItem){
    this.setState({
      visibleNavItem: navItem
    });
  }

  renderNav(navMap){
    return navMap.map((navItem, i) => {
      let formattedNavItem = navItem.toLowerCase().replace(' ', '-')
      let classes = this.state.visibleNavItem == formattedNavItem ? "subtitle is-3 nav-item active" : "subtitle is-3 nav-item"

      return (
        <h2 className={classes}
            key={i}
            onClick={this.handleClick.bind(this, formattedNavItem)} >
          <a href={"#"+formattedNavItem}>{navItem}</a>
        </h2>
      )
    });
  }

  render(){
    const navMap = ['Benefits', 'Why Kinetico', 'Testimonial', 'Plumbing and Heating Services', 'Contact'];
    const Nav = this.renderNav(navMap);
    return (
      <section className='main-content'>
        <article className="nav container">
          {Nav}
        </article>
        { this.state.visibleNavItem == 'benefits' ? <Benefits /> : null }
        { this.state.visibleNavItem == 'why-kinetico' ? <WhyKinetico /> : null }
      </section>
    )
  }
}

export default MainContent
