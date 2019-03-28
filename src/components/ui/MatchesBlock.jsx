import React from "react";

const MatchesBlock = ({ match }) => {
  return (
      <div className="match_block">
        <div className="match_date" style={{ color: "#aa2930" }}>
          {match.date}
        </div>
        <div className="match_wrapper">
          <div className="match_top">
            <div className="left">
              <div
                className="icon"
                style={{
                  background: `url(/images/icons/${match.localThmb}.png)`
                }}
              />
              <div className="team_name">{match.local}</div>
            </div>
            <div className="right">
              {match.final ? match.resultLocal : "__"}
            </div>
          </div>
          <div className="match_bottom">
            <div className="left">
              <div
                className="icon"
                style={{
                  background: `url(/images/icons/${match.awayThmb}.png)`
                }}
              />
              <div className="team_name">{match.away}</div>
            </div>
            <div className="right">{match.final ? match.resultAway : "__"}</div>
          </div>
        </div>
      </div>
  );
};

export default MatchesBlock;
