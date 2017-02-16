import React, { Component } from 'react'

class Benefits extends Component {
  render(){
    return (
      <div className="benefits">
        <div className="benefits-inner columns">
          <div className="eco column is-one-third">eco benefits</div>
          <div className="health column is-one-third">health benefits</div>
          <div className="taste column is-one-third">taste benefits</div>
        </div>
      </div>
    )
  }
}

export default Benefits;
