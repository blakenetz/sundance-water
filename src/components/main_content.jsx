import React, { Component } from 'react';

import Benefits from './benefits'
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
      let classes = this.state.visibleNavItem == navItem.alias ? "subtitle is-3 nav-item active" : "subtitle is-3 nav-item"

      return (
        <h2 className={classes}
            key={i}
            onClick={this.handleClick.bind(this, navItem.alias)} >
          <a href={"#"+navItem.alias}>{navItem.name}</a>
        </h2>
      )
    });
  }

  render(){
    const navMap = [
      { name: 'Benefits', alias: 'benefits'},
      { name: 'Why Kinetico', alias: 'why-kinetico'},
      { name: 'Testimonies', alias: 'testimonies'},
      { name: 'Plumbing and Heating Services', alias: 'ph-services'},
      { name: 'Contact', alias: 'contact'},
    ];
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
