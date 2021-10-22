import React from "react";

export const HeaderOfQuestion = ({ totalQuestions, questionNumber, question }) => {
  return (
    <div className="title-holder">
      <span style={{ height: "10px", minHeight: "10px" }}>&thinsp;</span>
      <p>{`Pregunta ${questionNumber}/${totalQuestions}`}</p>
      <h1>{question}</h1>
      <span style={{ height: "10px", minHeight: "10px" }}>&thinsp;</span>
    </div>
  );
};
