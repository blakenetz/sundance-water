import React, { Component } from 'react';

class Nav extends Component {
  onClick(){
    return (
      let toggle = document.querySelector(".nav-toggle");
      let menu = document.querySelector(".nav-menu");
      toggle.classList.toggle("is-active");
      menu.classList.toggle("is-active");
    )
  },

  render(){
    return (
      <nav className="nav has-shadow">
        <div className="nav-left">
          <figure className="image" id="logo">
            <img className="nav-item" src="/src/images/logo.png" alt="sundance-logo" />
          </figure>
        </div>
        <div className="nav-toggle">
          <span className="">TESTING</span>
          <span className="">FART</span>
          <span className="">BUTT</span>
        </div>
        <div className="nav-right nav-menu">
          <a className="nav-item is-tab is-active" href="javascript:void[0]">Home</a>
          <a className="nav-item is-tab" href="javascript:void[0]">Benefits of Purified Water</a>
          <a className="nav-item is-tab" href="javascript:void[0]">Why Kenetico</a>
          <a className="nav-item is-tab" href="javascript:void[0]">Testimonials</a>
          <a className="nav-item is-tab" href="javascript:void[0]">Plumbing and Heating Services</a>
          <a className="nav-item is-tab" href="javascript:void[0]">Contact Us</a>
        </div>
      </nav>
    )
  }
}

export default Nav;
