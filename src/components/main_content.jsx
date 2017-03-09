import React, { Component } from 'react';

import Content from './content';

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
      let classes = this.state.visibleItem == navItem.alias ? "subtitle is-3 nav-item active" : "subtitle is-3 nav-item"

      return (
        <h2 className={classes}
            key={i}
            onClick={this.handleClick.bind(this, navItem)} >
          <a href={"#"+navItem.alias}>{navItem.name}</a>
        </h2>
      )
    });
  }

  renderSection(navItem){
    return (
      <Content section={navItem} onClick={this.handleClick.bind(this, navItem)} />
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
        name: 'Testimonies',
        alias: 'testimonies',
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
        { this.state.visibleItem !== null ? this.renderSection(this.state.visibleItem) : null }
      </section>
    )
  }
}

export default MainContent
