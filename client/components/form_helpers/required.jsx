import React, { Component } from 'react';

class Required extends Component {
  render(){
    return (
      <span>
        <i className="fa fa-exclamation-triangle"></i>This field is required
        <br />
      </span>
    )
  }
}

export default Required
