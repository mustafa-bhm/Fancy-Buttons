import React, { useState } from "react";

function CounterButton(props) {
  const [clickAmount, setClickAmount] = useState(0);
  const handelClick = () => {
    setClickAmount(clickAmount + 1);
  };
  return (
    <button className="CounterButton" onClick={handelClick}>
      You clicked me {clickAmount} amount of times
    </button>
  );
}

export default CounterButton;
