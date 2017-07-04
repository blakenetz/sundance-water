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
    if (window.innerWidth > 600) return;

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
    e.persist()
    this.props.onChangeNavItem(e.target.dataset);
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

        <div className="nav-right nav-menu" onClick={this.handleMenuClick} role="navigation">
          <div className="nav-item clickable" data-navitem="benefits" role="menuitem">Benefits</div>
          <div className="nav-item clickable" data-navitem="why" role="menuitem">Why Kinetico</div>
          <div className="nav-item clickable" data-navitem="testimonials" role="menuitem">Testimonials</div>
          <div className="nav-item clickable" data-navitem="ph-services" role="menuitem">Plumbing and Heating</div>
          <div className="nav-item clickable" data-navitem="contact" role="menuitem">Contact</div>
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
