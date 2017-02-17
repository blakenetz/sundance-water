import React, { Component } from 'react'

class Benefits extends Component {
  render(){
    return (
      <div className="benefits">
        <div className="diagonal"></div>
        <div className="benefits-inner columns">

          <div className="eco column is-one-third">
            <figure className="benefit-icon">
              <img src="/src/images/sprout.png" alt="hands holding a sappling" />
            </figure>
          </div>

          <div className="health column is-one-third">
            <figure className="benefit-icon">
              <img src="/src/images/doctor.png" alt="standing doctor" />
            </figure>
          </div>

          <div className="taste column is-one-third">
            <figure className="benefit-icon">
              <img src="/src/images/salad.png" alt="standing doctor" />
            </figure>
          </div>
          
        </div>
      </div>
    )
  }
}

export default Benefits;
