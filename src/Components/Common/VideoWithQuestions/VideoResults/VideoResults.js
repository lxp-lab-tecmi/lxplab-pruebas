import React, { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import countQuestions from "../countQuestions";
import ICONS from "../../../../Utils/icons";
import axios from "axios";

const API_URL = "http://localhost:3000";

export const VideoResults = ({ allQuestions: allQuestionsOriginal, videoID, handleRepeatVideo, setQuestions }) => {
  const allQuestions = JSON.parse(JSON.stringify(allQuestionsOriginal));

  const [punctuation, setPunctuation] = useState(-1); // The default value, -1, means it is loading

  useEffect(() => {
    const times = [];
    const answers = [];
    const questionsIDs = [];

    let punctuation = 0;
    for (const [time, questions] of Object.entries(allQuestions)) {
      for (const question of questions) {
        switch (question.isCorrect) {
          // Only if is true increase the punctuation
          case true:
            punctuation++;
            break;

          // If is undefined, push the data need to later ask for that value to
          // the server
          case undefined:
            times.push(+time);
            questionsIDs.push(question.id);
            answers.push(question.answered);
            break;

          default:
        }
      }
    }

    // If there are questions which doesn't have the isCorrect data, then get it
    if (times.length > 0) {
      axios
        .post(`${API_URL}/videoQuestion/testAnswers`, {
          times,
          videoID,
          answers,
          questionsIDs,
        })
        .then(({ data: { data: results } }) => {
          for (let i = 0; i < times.length; i++) {
            const time = times[i];
            // Get the index of the question which has the questionID
            const index = allQuestions[time].findIndex(({ id }) => id === questionsIDs[i]);
            // Add the isCorrect data to that specific question
            allQuestions[time][index].isCorrect = results[i];
          }
          // At the end, set the questions to the new data. This will cause this useEffect to
          // run again and compute the punctuation.
          setQuestions(allQuestions);
        })
        .catch((err) => {
          setPunctuation(-2);
          console.log(err);
        });
    } else {
      setPunctuation(punctuation);
    }
  }, [allQuestions, videoID, setQuestions]);

  const numberOfQuestions = countQuestions(allQuestions);
  return (
    <React.Fragment>
      <div className="video-questionary">
        <div className="question-with-options" style={{ width: "90%" }}>
          {punctuation === -1 ? (
            <React.Fragment>
              <h2 className="noselect">Cargando resultados</h2>
              <Spinner className="mt-4" animation="border" role="status"></Spinner>
            </React.Fragment>
          ) : punctuation === -2 ? (
            <React.Fragment>
              <h2 className="noselect">Hubo un error :(</h2>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {ICONS.checkCircle(50, 50, "#090")}
              <h1 className="noselect">Tu resultado final</h1>
              <h3 style={{ fontWeight: "normal" }}>
                {punctuation} de {numberOfQuestions}
              </h3>
              <p>{+((punctuation / numberOfQuestions) * 100).toFixed(2)}%</p>
              <Button variant="outline-success" onClick={handleRepeatVideo}>
                Repetir prueba
              </Button>
            </React.Fragment>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};
