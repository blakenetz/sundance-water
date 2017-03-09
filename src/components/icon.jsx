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
    return (
      <section className="icon-wrapper column is-one-quarter" onClick={this.props.onClick} >
        <figure className={css(styles.BounceIn)} >
          <a href={"/#" + this.props.alias}>
            <img src={"/src/images/" + this.props.alias + "-icon.png"} alt={this.props.alt} />
          </a>
        </figure>
        <h2 className="title is-3 accent">{this.props.name}</h2>
      </section>
    )
  }
}

export default Icon;
