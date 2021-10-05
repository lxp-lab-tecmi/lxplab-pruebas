import React, { useRef, useState } from "react";
import { BottomBar } from "./BottomBar";
import { OpenAnswer } from "./OpenAnswer";
import { ClosedAnswers } from "./ClosedAnswers";
import { HeaderOfQuestion } from "./HeaderOfQuestion";

export const Question = ({
  time,
  questionData,
  handleGoBack,
  canUseButtons,
  totalQuestions,
  setCanUseButtons,
  handleSubmitAnswer,
}) => {
  const { question, correct_answers, incorrect_answers, question_type } = questionData || {
    ...{ correct_answers: [], incorrect_answers: [] },
    ...{ question: null, question_type: null },
  };

  const optionsDivRef = useRef();
  const [selectedOption, setSelectedOption] = useState(null);

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
    <React.Fragment>
      <HeaderOfQuestion
        totalQuestions={totalQuestions}
        questionNumber={questionData.index + 1}
        question={question}
      />

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
        selectedOption={selectedOption}
        handleSubmitAnswer={handleSubmitAnswerAndReset}
        doesOptionsHaveScrollBar={doesOptionsHaveScrollBar}
        handleGoBack={canUseButtons ? () => handleGoBack() & resetValues() : () => {}}
      />
    </React.Fragment>
  );
};
