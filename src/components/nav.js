import React, { Component } from 'react';

// todo: build hamburger dropdown.
// todo: wire nav items

class Nav extends Component {
  constructor(props){
    super(props)
    this.state = {
      isToggled: false,
      isHiden: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.hideBar = this.hideBar.bind(this)
  }

  hideBar(){
    let {isHiden} = this.state
    window.scrollY > this.prev
    ? !isHiden && this.setState({isHiden:true})
    : isHiden && this.setState({isHiden:false})

    this.prev = window.scrollY;
  }

  handleClick(){
    this.setState((prevState) => {
      isToggled: !prevState.isToggled
    });
  }

  componentDidMount(){
    window.addEventListener('scroll',this.hideBar);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll',this.hideBar);
  }

  render(){
    const navItems = ['Benefits', 'Testimonial', 'Plumbing and Heating Services', 'Contact']
    const navBar = navItems.map((el, i) => {
      return <a className="nav-item" href="javascript:void[0]" key={i}>{el}</a>
    });
    let classHide = this.state.isHide ? "hide" : ""

    return (
      <nav className="nav">
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
