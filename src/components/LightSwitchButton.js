import React, { useState } from "react";

function LightSwitchButton(props) {
  const handelClick = () => {
    if (props.light === "on") {
      props.setLight("off");
    } else {
      props.setLight("on");
    }
  };
  return (
    <button className="LightSwitchButton" onClick={handelClick}>
      {/* When the state is on */}
      {props.light === "on" && (
        <span className="on">
          <i>💡</i> I'm on!
        </span>
      )}
      {props.light === "off" && (
        <span className="off">
          <i>💡</i> I'm off!
        </span>
      )}
      {/* When the state is off */}
    </button>
  );
}
export default LightSwitchButton;
