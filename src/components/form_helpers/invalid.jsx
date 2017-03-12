import React, { Component } from 'react';

class Invalid extends Component {
  render(){
    const ending = this.props.field == 'email' ? ' address' : ' number';
    return (
      <span>
        <i className="fa fa-exclamation-triangle"></i>Please enter a valid {this.props.field} {ending}
      </span>
    )
  }
}

export default Invalid
