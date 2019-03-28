import React, { Component } from "react";
import { Tag } from "../../ui/misc";
import Fade from "react-reveal/Fade";
import Reveal from "react-reveal/Reveal";
import Cards from './Cards';

export default class Players extends Component {
    state={show : false}
  render() {
    return (
      <Reveal fraction={0.7} onReveal={() => {
          this.setState({ show : true })
      }}>
        <div
          className="home_meetplayers"
          style={{
            background:
              "url(/images/stripes.jpg) no-repeat center center / cover"
          }}
        >
          <div className="container">
            <div className="home_meetplayers_wrapper">
              <div className="home_card_wrapper"><Cards show={this.state.show}/></div>
              <div className="home_text_wrapper">
                <Fade right duration={1000}>
                  <div>
                    <Tag
                      bck="#aa2930"
                      size="5rem"
                      add={{
                        color: "#EEE",
                        marginTop: "5px",
                        display: "inline-block"
                      }}
                    >
                      meet
                    </Tag>
                  </div>
                </Fade>
                <Fade right duration={2000}>
                  <div>
                    <Tag
                      bck="#aa2930"
                      size="5rem"
                      add={{
                        color: "#EEE",
                        marginTop: "5px",
                        display: "inline-block"
                      }}
                    >
                      the
                    </Tag>
                  </div>
                </Fade>
                <Fade right duration={3000}>
                  <div>
                    <Tag
                      bck="#aa2930"
                      size="5rem"
                      add={{
                        color: "#EEE",
                        marginTop: "5px",
                        display: "inline-block"
                      }}
                    >
                      players
                    </Tag>
                  </div>
                </Fade>
                <Fade right duration={4000}>
                  <div>
                    <Tag
                      bck="#1474ae"
                      size="2.5rem"
                      add={{
                        color: "#EEE",
                        marginTop: "5px",
                        display: "inline-block",
                        borderRadius: "50px"
                      }}
                      link={true}
                      linkTo="/the_team"
                    >
                      players
                    </Tag>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    );
  }
}
