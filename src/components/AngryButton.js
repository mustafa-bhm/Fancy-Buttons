import React, { useState } from "react";

function AngryButton(props) {
  const [anger, SetAnger] = useState();
  return (
    <button className="AngryButton">
      {/* If you have NOT reached the maximum */}
      <span>Don't click me too much! </span>
      {/* If you HAVE reached the maximum */}
      <span>Rawr!</span>
    </button>
  );
}

export default AngryButton;