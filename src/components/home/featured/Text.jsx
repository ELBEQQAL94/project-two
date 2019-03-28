import React, { Component } from "react";
import { easePolyOut } from "d3-ease";
import Animate from "react-move/Animate";

class Text extends Component {
  animateNumber = () => (
    <Animate
      show={true}
      start={{ opacity: 0, rotate: 0 }}
      enter={{
        opacity: [1],
        rotate: [360],
        timing: { duration: 1000, ease: easePolyOut }
      }}
    >
      {({ opacity, rotate }) => (
        <div
          className="featured_number"
          style={{
            opacity,
            transform: `rotateX(${rotate}deg) translate(312px, 170px)`,
            color: "#aa2930",
            textShadow: " -9px 0px 1px white"
          }}
        >
          9
        </div>
      )}
    </Animate>
  );

  animateText = () => (
    <Animate
      show={true}
      start={{ opacity: 0, x: 503, y: 450 }}
      enter={{
        x: [473],
        y: [289],
        opacity: [1],
        timing: {
          duration: 500,
          ease: easePolyOut
        }
      }}
    >
      {({ x, y, opacity }) => (
        <div
          className="featured_first"
          style={{
            opacity,
            transform: `translate(${x}px, ${y}px)`
          }}
        >
          Cavani
        </div>
      )}
    </Animate>
  );

  animateSecond = () => (
    <Animate
      show={true}
      start={{ opacity: 0, x: 503, y: 586 }}
      enter={{
        opacity: [1],
        x: [589],
        y: [429],
        timing: { delay: 500, duration: 1000, ease: easePolyOut }
      }}
    >
      {({ opacity, x, y }) => (
        <div
          className="featured_second"
          style={{ opacity, transform: `translate(${x}px, ${y}px)` }}
        >
          League 1
        </div>
      )}
    </Animate>
  );

  animatePlayer = () => (
    <Animate
      show={true}
      start={{ opacity: 0 }}
      enter={{ opacity: [1], timing: { delay: 1000, ease: easePolyOut } }}
    >
      {({ opacity }) => (
        <div
          className="featured_player"
          style={{
            opacity,
            transform: "translate(687px, 201px)",
            background: 'url(/images/icons/cavani.png)'
          }}
        />
      )}
    </Animate>
  );

  render() {
    return (
      <div className="featured_text">
        {this.animatePlayer()}
        {this.animateNumber()}
        {this.animateText()}
        {this.animateSecond()}
      </div>
    );
  }
}

export default Text;
