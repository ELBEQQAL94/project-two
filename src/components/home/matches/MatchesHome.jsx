import React from "react";
import { Tag } from "../../ui/misc";
import Blocks from "./Blocks";
import Bounce from "react-reveal/Bounce";

const MatchesHome = () => {
  return (
    <div className="home_matches_wrapper" style={{ background: "#EEE" }}>
      <div className="container">
        <Tag size="2rem" add={{ color: "#1474ae" }}>
          matches
        </Tag>
        <Blocks />
        <Bounce left duration={1000}>
          <Tag
            link={true}
            linkTo="/the_team"
            add={{
              background: "#1474ae",
              color: "#EEE",
              borderRadius: "50px",
              fontSize: "1.5rem"
            }}
          >
            see more matches
          </Tag>
        </Bounce>
      </div>
    </div>
  );
};

export default MatchesHome;
