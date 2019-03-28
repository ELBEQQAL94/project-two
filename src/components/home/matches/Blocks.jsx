import React, { Component } from "react";
import { matchesDB } from "../../../firebase";
import { firebaseLooper, reverseArray } from "../../ui/misc";
import MatchesBlock from "../../ui/MatchesBlock";
import Fade from "react-reveal/Fade";

export default class Blocks extends Component {
  state = {
    matches: []
  };
  componentDidMount() {
    matchesDB
      .limitToLast(6)
      .once("value")
      .then(snapshot => {
        const matches = firebaseLooper(snapshot);
        this.setState({
          matches: reverseArray(matches)
        });
      });
  }
  showMatches = matches =>
    matches
      ? matches.map(match => (
          <Fade duration={1000} key={match.id}>
            <div className="item">
              <div className="wrapper">
                <MatchesBlock match={match} />
              </div>
            </div>
          </Fade>
        ))
      : null;
  render() {
    return (
      <div className="home_matches">{this.showMatches(this.state.matches)}</div>
    );
  }
}
