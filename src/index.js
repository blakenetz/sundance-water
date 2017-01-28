import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import LandingPage from './components/landing_page';

require('./style/style.scss')
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <LandingPage />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.root'));
