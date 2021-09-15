import React, { useState, useRef } from "react";

import BottomBar from "./BottomBar";
import { useMouseAndTouch } from "../Context/MouseAndTouchContext";
import ClosedAnswers from "./ClosedAnswers";
import OpenAnswer from "./OpenAnswer";

export default function VideoQuestionary({
  time,
  display,
  handleGoBack,
  questionData,
  totalQuestions,
  handleSubmitAnswer,
}) {
  const mouseAndTouchState = useMouseAndTouch();

  const [selectedOption, setSelectedOption] = useState(null);
  const [canUseButtons, setCanUseButtons] = useState(false);

  const { question, correct_answers, incorrect_answers, question_type } = questionData || {
    ...{ correct_answers: [], incorrect_answers: [] },
    ...{ question: null, question_type: null },
  };

  const optionsDivRef = useRef();

  if (!display) return null;

  // If it can't use the buttons but the mouse is not clicked, then you can use them
  if (!canUseButtons && !mouseAndTouchState.clicked) setTimeout(() => setCanUseButtons(true), 100);

  const doesOptionsHaveScrollBar = optionsDivRef.current?.scrollHeight > optionsDivRef.current?.clientHeight;
  const handleSelectAnswer = (option, question_type) => {
    switch (question_type) {
      case "closed":
      case "boolean":
        return setSelectedOption((prevOption) => (option === prevOption ? null : option));

      case "open":
        return setSelectedOption(option.trim() === "" ? null : option);

      default:
    }
  };

  const resetValues = () => setSelectedOption(null) & setCanUseButtons(false);
  const handleSubmitAnswerAndReset = () => handleSubmitAnswer(selectedOption.trim(), time) & resetValues();

  return (
    <div className="video-questionary noselect">
      <div className="question-with-options">
        <div className="title-holder">
          <span style={{ height: "10px", minHeight: "10px" }}>&thinsp;</span>
          <p>{`Pregunta ${questionData.index + 1}/${totalQuestions}`}</p>
          <h1>{question}</h1>
          <span style={{ height: "10px", minHeight: "10px" }}>&thinsp;</span>
        </div>

        {(() => {
          switch (question_type) {
            case "closed":
            case "boolean":
              return (
                <ClosedAnswers
                  optionsDivRef={optionsDivRef}
                  selectedOption={selectedOption}
                  correct_answers={correct_answers}
                  incorrect_answers={incorrect_answers}
                  handleSelectAnswer={handleSelectAnswer}
                />
              );

            case "open":
              return (
                <OpenAnswer
                  answer={selectedOption}
                  handleSelectAnswer={handleSelectAnswer}
                  handleSubmitAnswer={handleSubmitAnswerAndReset}
                />
              );

            default:
              return null;
          }
        })()}

        <BottomBar
          handleSubmitAnswer={handleSubmitAnswerAndReset}
          selectedOption={selectedOption}
          doesOptionsHaveScrollBar={doesOptionsHaveScrollBar}
          handleGoBack={canUseButtons ? () => handleGoBack() & resetValues() : () => {}}
        />
      </div>
    </div>
  );
}
