import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import MobileNav from './components/mobile_nav';
import LandingPage from './components/landing_page';
import MainContent from './components/main_content';

require('./style/style.scss');

class App extends Component {
  constructor(props){
    super(props)
    this.state = { dismissNav: false }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e){
    this.setState((prevState, currProps) => {
      return { ...prevState, dismissNav: true }
    })
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <MobileNav dismissNav={this.state.dismissNav} />
        <LandingPage />
        <MainContent />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.root'));
