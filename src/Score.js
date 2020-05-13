import React from "react";

function Score(props) {
  return (
    <>
      <h3>{props.score.date}</h3>
      <h3>{props.score.score}</h3>
    </>
  );
}

export default Score;
