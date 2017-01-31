import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Nav from './components/nav';
import LandingPage from './components/landing_page';

require('./style/style.scss')
class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <LandingPage />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.root'));
