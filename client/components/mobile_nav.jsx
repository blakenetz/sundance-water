import React, { Component } from 'react';

class MobileNav extends Component {
  constructor(props){
    super(props)
    this.state = { isCollapsed: true }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e){
    let menu = document.querySelector(".nav-menu");
    menu.classList.toggle("is-active");
    this.setState({isCollapsed: !this.state.isCollapsed})
  }

  render(){
    return (
      <nav className='nav mobile-nav has-shadow'>
        <div className="nav-left">
          <figure className="image">
            <img id="mobile-logo"
                src="/images/logo.png"
                alt="sundance-logo" />
          </figure>
        </div>

        <div className="nav-right nav-menu">
          <a className="nav-item">Benefits</a>
          <a className="nav-item">Why Kinetico</a>
          <a className="nav-item">Testimonials</a>
          <a className="nav-item">Plumbing and Heating</a>
          <a className="nav-item">Contact</a>
        </div>

        <span className="nav-toggle" onClick={this.handleClick}>
          <span></span>
          <span></span>
          <span></span>
        </span>

      </nav>
    )
  }
}

export default MobileNav;
