import React from "react";
import Zoom from "react-reveal/Zoom";

const PromotionAnimation = () => {
  return (
    <div className="promotion_animation">
      <Zoom duration={1000}>
        <div className="left">
          <div>
            <span>Win a</span>
            <span>Jersey</span>
          </div>
        </div>
      </Zoom>
      <Zoom duration={1000}>
        <div className="right">
         <div style={{background : 'url(/images/icons/shirt.jpg) no-repeat center center / cover', height : '200px'}}></div>
        </div>
      </Zoom>
    </div>
  );
};

export default PromotionAnimation;
