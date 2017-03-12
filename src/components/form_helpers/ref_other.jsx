import React, { Component } from 'react';

class ReferenceOther extends Component {
  render(){
    return (
      <p className="control is-expanded">
        <input className="input"
          type="text"
          placeholder="Other"
          name="referenceOther"
          onChange={this.handleChange}
          onBlur={this.handleBlur} />
      </p>
    )
  }
}

export default ReferenceOther
