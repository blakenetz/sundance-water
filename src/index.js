import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import LandingPage from './components/landing_page';
import MainContent from './components/main_content';

require('./style/style.scss');

class App extends Component {
  render() {
    return (
      <div>
        <LandingPage />
        <MainContent />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.root'));
