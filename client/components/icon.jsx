import React, { Component } from 'react';
import { bounceInUp } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    BounceIn: {
        animationName: bounceInUp,
        animationDuration: '2s',
    }
});

class Icon extends Component {
  render(){
    const h2Class = this.props.active ? 'title is-3 accent active' : 'title is-3 accent';
    return (
      <section className="icon-wrapper column is-one-quarter" onClick={this.props.onClick} >
        <figure className={css(styles.BounceIn)} >
          <img src={"/images/" + this.props.alias + "-icon.png"} alt={this.props.alt} />
        </figure>
        <h2 className={h2Class}>{this.props.name}</h2>
      </section>
    )
  }
}

export default Icon;
