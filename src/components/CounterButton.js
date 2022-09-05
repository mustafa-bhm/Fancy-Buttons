import React, { useState } from "react";

function CounterButton(props) {
  const [clickAmount, setClickAmount] = useState();
  return (
    <button className="CounterButton">You clicked me X amoount of times</button>
  );
}

export default CounterButton;
