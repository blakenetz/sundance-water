import React, { Component } from 'react';

class WhyKinetico extends Component {
  // renderReasons(reasons){
  //   return reasons.map((reasonData, i) => {
  //     return <Reason key={i} name={reasonData.name} />
  //   })
  // }

  render(){
    const whyMap = [
      {name: 'History', alt: 'standing doctor'},
      {name: 'Drinking Water Stations', alt: 'hands holding a sprout'},
      {name: 'Water Softeners', alt: 'bowl of salad'},
      {name: 'Certificates', alt: 'skin products'}
    ]
    // const reasons = this.renderReasons(whyMap)

    return(
      <article className="why columns" id="why-kinetico">
        <div className="why-inner column is-10 is-offset-1">
          <h2 className="title is-1 header">Why Kinetico</h2>
        </div>
      </article>
    )
  }
}

export default WhyKinetico;
