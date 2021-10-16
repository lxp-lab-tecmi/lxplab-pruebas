import React, { useRef, useState, useEffect } from "react";
import { BottomBar } from "./BottomBar";
import { OpenAnswer } from "./OpenAnswer";
import { ClosedAnswers } from "./ClosedAnswers";
import { HeaderOfQuestion } from "./HeaderOfQuestion";

export const Question = ({
  time,
  handleGoBack,
  questionsData,
  canUseButtons,
  totalQuestions,
  setCanUseButtons,
  handleSubmitAnswer,
}) => {
  const questionsToShow = [];
  const optionsDivRef = useRef();
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => setSelectedOptions(new Array(questionsData.length).fill(null)), [questionsData]);

  for (let i = 0; i < questionsData.length; i++) {
    const { question, answers, question_type, index } = questionsData[i];

    const handleSelectAnswer = (option) => {
      switch (question_type) {
        case "closed":
        case "boolean":
          return setSelectedOptions((prevOptions) => {
            const copy = [...prevOptions];
            copy[i] = option === prevOptions[i] ? null : option;
            return copy;
          });

        case "open":
          return setSelectedOptions((prevOptions) => {
            const copy = [...prevOptions];
            copy[i] = option.trim() === "" ? null : option;
            return copy;
          });

        default:
      }
    };

    questionsToShow.push(
      <React.Fragment key={index}>
        <HeaderOfQuestion question={question} questionNumber={index + 1} totalQuestions={totalQuestions} />

        {(() => {
          switch (question_type) {
            case "closed":
            case "boolean":
              return (
                <ClosedAnswers
                  answers={answers}
                  optionsDivRef={optionsDivRef}
                  selectedOption={selectedOptions[i]}
                  handleSelectAnswer={handleSelectAnswer}
                />
              );

            case "open":
              return (
                <OpenAnswer
                  answer={selectedOptions[i]}
                  handleSelectAnswer={handleSelectAnswer}
                  handleSubmitAnswer={handleSubmitAnswerAndReset}
                />
              );

            default:
              return null;
          }
        })()}
      </React.Fragment>
    );
  }

  const doesOptionsHaveScrollBar = optionsDivRef.current?.scrollHeight > optionsDivRef.current?.clientHeight;
  const resetValues = () => setSelectedOptions([]) & setCanUseButtons(false);
  const handleSubmitAnswerAndReset = () => handleSubmitAnswer(selectedOptions, time) & resetValues();

  return (
    <>
      <div className="questions-div">{questionsToShow}</div>

      <BottomBar
        selectedOptions={selectedOptions}
        handleSubmitAnswer={handleSubmitAnswerAndReset}
        doesOptionsHaveScrollBar={doesOptionsHaveScrollBar}
        handleGoBack={canUseButtons ? () => handleGoBack() & resetValues() : () => {}}
      />
    </>
  );
};
