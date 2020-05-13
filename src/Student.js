import React from "react";
import Score from "./Score";

function Student(props) {
  const studentsScores = props.student.scores.map((score, i) => (
    <Score key={i} score={score} />
  ));
  return (
    <>
      <h1>{props.student.name}</h1>
      <h3>{props.student.bio}</h3>
      {studentsScores}
    </>
  );
}

export default Student;
