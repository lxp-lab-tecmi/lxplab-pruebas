import React, { useMemo } from "react";
import { OptionForQuestion } from "./OptionForQuestion";
import shuffleArray from "../../../../Utils/shuffleArray";

export const ClosedAnswers = ({ answers, optionsDivRef, selectedOption, handleSelectAnswer }) => {
  // Only shuffle the array whet is needed, not on every frame
  const shuffledAnswers = useMemo(
    () => shuffleArray([...answers]), //
    [answers]
  );

  const optionsForQuestion = shuffledAnswers.map((option, index) => {
    return (
      <OptionForQuestion
        key={index}
        text={option}
        index={index}
        checked={selectedOption === option}
        handleSelectAnswer={() => handleSelectAnswer(option)}
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
