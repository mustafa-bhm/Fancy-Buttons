import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";

function AngryButton(props) {
  const [anger, SetAnger] = useState(0);
  const handelClick = () => {
    if (anger < 1) {
      SetAnger(anger + 0.1);
    } else {
      SetAnger(0);
    }
  };
  return (
    <button
      className="AngryButton"
      style={{ backgroundColor: `rgba(255,0,0,${anger})` }}
      onClick={handelClick}
    >
      {/* {anger < 1 ? <span>Don't click me too much! </span> : <span>Rawr!</span>} */}
      {anger < 1 && <span>Don't click me too much! </span>}
      {anger > 1 && <span>Rawr!</span>}
      {/* If you have NOT reached the maximum */}
      {/* <span>Don't click me too much! </span> */}
      {/* If you HAVE reached the maximum */}
      {/* <span>Rawr!</span> */}
    </button>
  );
}

export default AngryButton;
