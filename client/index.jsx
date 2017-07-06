import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import MobileNav from './components/mobile_nav';
import LandingPage from './components/landing_page';
import MainContent from './components/main_content';

require('./style/style.scss');

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      dismissNav: false,
      visItem: null,
    }
    this.handleClick = this.handleClick.bind(this)
    this.changeVisItem = this.changeVisItem.bind(this)
  }

  changeVisItem(newItem){
    this.setState({ visItem: newItem.navitem });
  }

  handleClick(e){
    this.setState({ dismissNav: true })
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <MobileNav dismissNav={this.state.dismissNav} onChangeNavItem={this.changeVisItem} />
        <LandingPage />
          <MainContent visItem={this.state.visItem} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.root'));
