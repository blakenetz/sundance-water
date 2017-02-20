import React, { Component } from 'react';
import BenefitDetails from './benefit_details';

class Benefits extends Component {
  constructor(props){
    super(props)
    this.state = { showDetails: false }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState({ showDetails: true });
  }

  render(){
    return (
      <div className="benefits">
        <div className="diagonal"></div>
        <div className="benefits-inner columns">

          <div className="eco column is-one-third" onClick={this.handleClick}>
            <h2 className="title is-3"><span className="accent">Eco</span> Benefits</h2>
            <figure className="benefit-icon">
              <img src="/src/images/sprout.png" alt="hands holding a sappling" />
            </figure>
          </div>

          <div className="health column is-one-third" onClick={this.handleClick}>
            <h2 className="title is-3"><span className="accent">Health</span> Benefits</h2>
            <figure className="benefit-icon">
              <img src="/src/images/doctor.png" alt="standing doctor" />
            </figure>
          </div>

          <div className="taste column is-one-third" onClick={this.handleClick}>
            <h2 className="title is-3"><span className="accent">Taste</span> Benefits</h2>
            <figure className="benefit-icon">
              <img src="/src/images/salad.png" alt="standing doctor" />
            </figure>
          </div>

        </div>
        { this.state.showDetails ? <BenefitDetails /> : null }
      </div>
    )
  }
}

export default Benefits;
