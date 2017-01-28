import React, { Component } from 'react';

class Header extends Component {
  render(){
    return (
      <div className="header">
        <div className="header-left">
          <img id="logo" src="/src/images/logo.png" />
        </div>
        <div className="header-right">
          <ul>
            <li><a href="javascript:void[0]">Benefits of Purified Water</a></li>
            <li><a href="javascript:void[0]">Why Kenetico</a></li>
            <li><a href="javascript:void[0]">Testimonials</a></li>
            <li><a href="javascript:void[0]">Plumbing and Heating Services</a></li>
            <li><a href="javascript:void[0]">Contact Us</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header;
