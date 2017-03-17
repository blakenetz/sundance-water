import React, { Component } from 'react';

import Required from './form_helpers/required';
import ReferenceOther from './form_helpers/ref_other';
import Invalid from './form_helpers/invalid';

class Contact extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      nameReq: false,
      city: '',
      cityReq: false,
      email: '',
      emailReq: false,
      emailInvalid: false,
      phone: '',
      phoneReq: false,
      phoneInvalid: false,
      reference: 'default',
      referenceOther: '',
      referenceOtherVisible: false,
      product: 'default',
      comments: '',
    }
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleBlur(e){
    let name = e.target.name
    let value = e.target.value

    switch (name) {
      case 'name':
        value.trim().length > 0 ? this.setState({ nameReq: false }) : this.setState({ nameReq: true });
        break;

      case 'city':
        value.trim().length > 0 ? this.setState({ cityReq: false }) : this.setState({ cityReq: true })
        break;

      case 'email':
        const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        value.trim().length > 0 ? this.setState({ emailReq: false }) : this.setState({ emailReq: true });
        reg.test(value) ? this.setState({ emailInvalid: false }) : this.setState({ emailInvalid: true })
        break;

      case 'phone':
        value = value.toLowerCase().replace(/[^0-9-]/g,"");
        value.length > 0 ? this.setState({ phoneReq: false }) : this.setState({ phoneReq: true });

        if (value.length == 10) {
          const m = value.match(/^(\d{3})(\d{3})(\d{4})$/);
          const formattedNum = "(" + m[1] + ") " + m[2] + "-" + m[3];
          this.setState({ [name]: formattedNum })
          this.setState({ phoneInvalid: false });
        } else {
          this.setState({ phoneInvalid: true });
        }
        break;
    }
  }

  handleChange(e){
    const name = e.target.name
    const value = e.target.value

    if (name == 'reference') {
      value == 'other' ? this.setState({ referenceOtherVisible: true }) : this.setState({ referenceOtherVisible: false });
    }

    this.setState({
      [name]: value
    })
  }

  handleSubmit(e){
    e.preventDefault();

  }

  render(){
    return (
      <article className="info-block">
        <form className="container" onSubmit={this.handleSubmit}>

          <p className="control has-icon">
            <input className="input"
              name="name"
              placeholder="Name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              onBlur={this.handleBlur} />
            <span className="icon is-small">
              <i className="fa fa-user"></i>
            </span>
            { this.state.nameReq ? <Required /> : null }
          </p>

          <p className="control has-icon">
            <input className="input"
              name="city"
              placeholder="City"
              type="text"
              value={this.state.city}
              onChange={this.handleChange}
              onBlur={this.handleBlur} />
            <span className="icon is-small">
              <i className="fa fa-home"></i>
            </span>
            { this.state.cityReq ? <Required /> : null }
          </p>

          <p className="control has-icon">
            <input className="input"
              name='email'
              placeholder="Email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
              onBlur={this.handleBlur} />
            <span className="icon is-small">
              <i className="fa fa-envelope"></i>
            </span>
            { this.state.emailReq ? <Required /> : null }
            { this.state.emailInvalid ? <Invalid field='email' /> : null }
          </p>

          <p className="control has-icon">
            <input className="input"
              name="phone"
              placeholder="Phone"
              type="tel"
              value={this.state.phone}
              onChange={this.handleChange}
              onBlur={this.handleBlur} />
            <span className="icon is-small">
              <i className="fa fa-phone"></i>
            </span>
            { this.state.phoneReq ? <Required /> : null }
            { this.state.phoneInvalid ? <Invalid field='phone' /> : null }
          </p>

          <label className="label">How did you hear about us?</label>
          <div className="control">
            <div className="control is-grouped">
              <p className="control is-expanded">
                <span className="select">
                  <select name="reference"
                    value={this.state.reference}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur} >
                    <option value="default" disabled>-- Select one --</option>
                    <option value="family">Friend / Family</option>
                    <option value="radio">Radio</option>
                    <option value="newspaper">Newspaper</option>
                    <option value="internet">Internet</option>
                    <option value="other">Other</option>
                  </select>
                </span>
              </p>
              { this.state.referenceOtherVisible ? <ReferenceOther /> : null }
            </div>
          </div>

          <label className="label">What product are you interested in?</label>
          <div className="control">
            <p className="control is-expanded">
              <span className="select">
                <select name="product"
                  value={this.state.product}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}>
                  <option value="default" disabled>-- Select one --</option>
                  <option value="house">Whole House Systems</option>
                  <option value="stations">Drinking Water Stations</option>
                  <option value="commercial">Commercial</option>
                  <option value="plumbing">Plumbing and Heating</option>
                </select>
              </span>
            </p>
          </div>

          <label className="label">Additional Comments:</label>
          <p className="control">
            <textarea
              className="textarea"
              placeholder="Anything else you would like to add?"
              name="comments"
              value={this.state.comments}
              onChange={this.handleChange}
              onBlur={this.handleBlur}></textarea>
          </p>

          <input className="button is-light" type="submit" value="Submit" />
        </form>
      </article>
    )
  }
}

export default Contact;
