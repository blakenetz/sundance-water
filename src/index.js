import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Nav from './components/nav';
import LandingPage from './components/landing_page';
import Benefits from './components/benefits';

class App extends Component {
  render() {
    const benefitsCategories = [
      {title: 'Health', alt: 'standing doctor'},
      {title: 'Eco', alt: 'hands holding a sprout'},
      {title: 'taste', alt: 'bowl of salad'}
    ]

    return (
      <div>
        <Nav />
        <LandingPage />
        <Benefits categories={benefitsCategories} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.root'));
