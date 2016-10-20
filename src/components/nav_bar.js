import React, { Component } from 'react'

class NavBar extends Component {
  render(){
    return (
      <div className="nav-bar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Another Dead Link...</li>
        </ul>
      </div>
    )
  }
}

export default NavBar;
