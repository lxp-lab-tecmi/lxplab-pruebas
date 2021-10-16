import React, { useMemo, useState } from "react";
import ICONS from "../../../../Utils/icons";
import { Button } from "react-bootstrap";
import countQuestions from "../countQuestions";

export const VideoResults = ({ questions, handleRepeatVideo }) => {
  const [punctuation, setPunctuation] = useState(0);
  useMemo(() => {
    const values = Object.values(questions);
    let punctuation = 0;
    for (const value of values) {
      if (
        value.answered &&
        value.correct_answers &&
        value.correct_answers.map((a) => a.toUpperCase()).includes(value.answered.toUpperCase())
      )
        punctuation++;
    }
    setPunctuation(punctuation);
  }, [questions]);

  const numberOfQuestions = countQuestions(questions);
  return (
    <React.Fragment>
      <div className="video-questionary">
        <div className="question-with-options" style={{ width: "90%" }}>
          {ICONS.checkCircle(50, 50, "#090")}
          <h1 className="noselect">Tu resultado final</h1>
          <h3 style={{ fontWeight: "normal" }}>
            {punctuation} de {numberOfQuestions}
          </h3>
          <p>{+((punctuation / numberOfQuestions) * 100).toFixed(2)}%</p>
          <Button variant="outline-success" onClick={handleRepeatVideo}>
            Repetir prueba
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};
