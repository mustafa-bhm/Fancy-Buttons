import React, { useState } from "react";

function LightSwitchButton(props) {
  const [light, setLight] = useState("off");
  const handelClick = () => {
    if (light === "on") {
      setLight("off");
    } else {
      setLight("on");
    }
  };
  return (
    <button className="LightSwitchButton" onClick={handelClick}>
      {/* When the state is on */}
      {light === "on" && (
        <span className="on">
          <i>💡</i> I'm on!
        </span>
      )}
      {light === "off" && (
        <span className="off">
          <i>💡</i> I'm off!
        </span>
      )}
      {/* When the state is off */}
    </button>
  );
}
export default LightSwitchButton;
