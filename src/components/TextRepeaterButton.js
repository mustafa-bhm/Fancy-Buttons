import React, { useState } from "react";

function TextRepeaterButton(props) {
  const [repetitions, setRepetitions] = useState(1);
  const textAarray = [];
  for (let i = 0; i < repetitions; i++) {
    textAarray.push(<span key={i}> I like this text, </span>);
  }
  const handelClick = () => {
    setRepetitions(repetitions + 1);
  };
  return (
    <button className="TextRepeaterButton" onClick={handelClick}>
      {textAarray}
    </button>
  );
}
export default TextRepeaterButton;
