import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import NavBar from './components/nav_bar';
import LandingPage from './components/landing_page';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <LandingPage />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.root'));
