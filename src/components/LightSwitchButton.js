import React, { useState } from "react";

function LightSwitchButton(props) {
  const { light, switchLight } = props;

  return (
    <button className="LightSwitchButton" onClick={switchLight}>
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
