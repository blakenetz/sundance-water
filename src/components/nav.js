import React, { Component } from 'react';

// todo: build hamburger dropdown.
// todo: wire nav items

class Nav extends Component {
  constructor(props){
    super(props)
    this.state = {isToggled: false}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState((prevState) => {
      isToggled: !prevState.isToggled
    });
  }

  render(){
    const navItems = ['Benefits', 'Testimonial', 'Plumbing and Heating Services', 'Contact']
    const navBar = navItems.map((el, i) => {
      return <a className="nav-item" href="javascript:void[0]" key={i}>{el}</a>
    });

    return (
      <nav className="nav has-shadow">
        <div className="nav-left">
          <figure className="image">
            <img  className="nav-item is-active"
                  id="logo"
                  src="/src/images/logo.png"
                  alt="sundance-logo" />
          </figure>
        </div>

        <div className="nav-right nav-menu">{ navBar }</div>

        <div className="nav-toggle" onClick={ this.handleClick }>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    )
  }
}


export default Nav;
