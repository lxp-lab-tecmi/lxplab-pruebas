import React, { useMemo } from "react";
import { OptionForQuestion } from "./OptionForQuestion";
import shuffleArray from "../../../../Utils/shuffleArray";

export const ClosedAnswers = ({
  optionsDivRef,
  selectedOption,
  correct_answers,
  incorrect_answers,
  handleSelectAnswer,
}) => {
  // Only shuffle the array whet is needed, not on every frame
  const shuffledAnswers = useMemo(
    () => shuffleArray([...incorrect_answers, ...correct_answers]), //
    [incorrect_answers, correct_answers]
  ); // eslint-disable-line react-hooks/exhaustive-deps

  const optionsForQuestion = shuffledAnswers.map((option, index) => {
    return (
      <OptionForQuestion
        key={index}
        text={option}
        index={index}
        checked={selectedOption === option}
        handleSelectAnswer={() => handleSelectAnswer(option, "closed")}
      />
    );
  });

  return (
    <div className="options-closed-answers" ref={optionsDivRef}>
      {optionsForQuestion}
      <span style={{ height: "10px", minHeight: "10px" }}>&thinsp;</span>
    </div>
  );
};
