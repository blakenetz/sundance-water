import React, { Component } from 'react';

class Testimonials extends Component {

  renderTestimonials(testimonials){
    return testimonials.map((testimonial, i) => {
      return (
        <figure key={i}>
          <img src={"/src/images/" + testimonial.alias + "-testimonial.jpg"} alt={testimonial.customer + " family"} />
          <figcaption className="subtitle is-3">{testimonial.customer}</figcaption>
          <figcaption className="subtitle is-5">{testimonial.location}</figcaption>
        </figure>
      )
    })
  }

  render(){
    const testimonialMap = [
      {
        alias: 'edlemann',
        customer: "Esther Edlemann",
        location: "Eagle, CO",
        quote: "Our Kids were very sensitive to chemicals in the water and we went through many health challenges with them. Amazingly with Kinetico Water Systems, their health increased dramatically! We never thought that the water could get so tasty and pure. We love it!",
      },
      {
        alias: 'innovative',
        customer: "Innovative Energy",
        location: "Breckenridge, CO",
        quote: "We had a great experience working with the Kinetico team to get our office drinking water. The first unit we had wasn’t working perfectly and they immediately took care of it and replaced it with a new one. The reverse osmosis water tastes great and it’s nice to have the on-demand hot water. Thanks for all of your attention and your great product!",
      },
      {
        alias: 'constien',
        customer: "Ron Constien",
        location: "New Castle and Eagle, CO",
        quote: "I find the ease of use the best... we just have great water now!",
      },
      {
        alias: 'woessner',
        customer: "Rob and Amy Woessner",
        location: "Silverthorne, CO",
        quote: "We have had our Kinetico water softener and RO drinking system for 19 years. The softener only needed one service call after 17 years, and the RO is still working well (with the original membrane)! We are very pleased with the reliability of the product. So get the point and choose Kinetico!",
      },
      {
        alias: 'fricker',
        customer: "Helmut and Ursula Fricker",
        location: "Eagle, CO",
        quote: "We bought our Kinetico Softener and Drinking Purifier 17 years ago from Eric. We are very pleased! We chose Kinetico because of Eric, and the non-electric design looked easy and reliable. It has been a trouble free system! Our second home in Eagle doesn't have a Kinetico System yet reminds us home much better Kinetico water is! We plan to invest in a second system to get rid of all that hardness buildup and poor taste. Thank you Eric and Kinetico!",
      },
    ]

    return (
      <section className="testimonials">
        {this.renderTestimonials(testimonialMap)}
      </section>
    )
  }
}

export default Testimonials;
