import React, { Component } from 'react';

class MobileNav extends Component {
  constructor(props){
    super(props)
    this.state = { dismissNav: this.props.dismissNav }
    this.handleBurgerClick = this.handleBurgerClick.bind(this)
    this.handleMenuClick = this.handleMenuClick.bind(this)
    this.toggleNav = this.toggleNav.bind(this)
  }

  componentWillReceiveProps(){
    this.setState((prevState, currProps) => {
      if (currProps.dismissNav) {
        let menu = document.querySelector(".nav-menu");
        menu.classList.remove("is-active");
      }
      return { ...prevState, dismissNav: currProps.dismissNav };
    });
  }

  handleBurgerClick(e){
    e.stopPropagation()
    this.toggleNav()
  }

  handleMenuClick(e){
    console.log(e.target)
  }

  toggleNav(){
    let menu = document.querySelector(".nav-menu");
    menu.classList.toggle("is-active");
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

        <div className="nav-right nav-menu" onClick={this.handleMenuClick}>
          <a className="nav-item">Benefits</a>
          <a className="nav-item">Why Kinetico</a>
          <a className="nav-item">Testimonials</a>
          <a className="nav-item">Plumbing and Heating</a>
          <a className="nav-item">Contact</a>
        </div>

        <span className="nav-toggle" onClick={this.handleBurgerClick}>
          <span></span>
          <span></span>
          <span></span>
        </span>

      </nav>
    )
  }
}

export default MobileNav;
