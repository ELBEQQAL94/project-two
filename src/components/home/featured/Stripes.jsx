import React, { Component } from "react";
import { easePolyOut } from "d3-ease";
import Animate from "react-move/Animate";

class Stripes extends Component {
  state = {
    stripes: [
      {
        background: "#1474ae",
        left: 120,
        rotate: 25,
        delay: 0,
        top: -177
      },
      {
        background: "#EEE",
        left: 360,
        rotate: 25,
        delay: 300,
        top: -397
      },
      {
        background: "#1474ae",
        left: 600,
        rotate: 25,
        delay: 600,
        top: -498
      }
    ]
  };

  showStripes = () =>
    this.state.stripes.map((stripe, i) => (
      <Animate
        key={i}
        show={true}
        start={{
          background: "#1474ae",
          opacity: 0,
          left: 0,
          rotate: 0,
          top: 0,
          delay: 0
        }}
        enter={{
          background: [stripe.background],
          timing: {
            delay: stripe.delay,
            duration: 200,
            ease: easePolyOut
          },
          opacity: [1],
          left: [stripe.left],
          rotate: [stripe.rotate],
          top: [stripe.top]
        }}
      >
        {({ background, left, opacity, top, rotate, dealay }) => (
          <div
            className="stripe"
            style={{
              background,
              opacity,
              transform: `rotate(${rotate}deg) translate(${left}px, ${top}px)`
            }}
          />
        )}
      </Animate>
    ));

  render() {
    return <div className="featured_stripes">{this.showStripes()}</div>;
  }
}

export default Stripes;
