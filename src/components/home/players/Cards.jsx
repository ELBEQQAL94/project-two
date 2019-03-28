import React, { Component } from "react";
import { easePolyOut } from "d3-ease";
import Animate from "react-move/Animate";

class Cards extends Component {
  state = {
    show: this.props.show,
    cards: [
      {
        bottom: 90,
        left: 300
      },
      {
        bottom: 60,
        left: 200
      },
      {
        bottom: 30,
        left: 100
      },
      {
        bottom: 0,
        left: 0
      }
    ]
  };

  showAnimateCards = () =>
    this.state.cards.map((card, i) => (
      <Animate
        key={i}
        show={this.props.show}
        start={{ left: 0, bottom: 0 }}
        enter={{
          left: [card.left],
          bottom: [card.bottom],
          src: [card.src],
          timing: { delay: 800, duration: 1000, ease: easePolyOut }
        }}
      >
        {({ bottom, left, src }) => {
          return (
            <div style={{ bottom, left, position: "absolute" }}>
              <img src="/images/icons/cavani.png" alt="cavani" title="cavani" />
            </div>
          );
        }}
      </Animate>
    ));
  render() {
    return <div>{this.showAnimateCards()}</div>;
  }
}

export default Cards;
