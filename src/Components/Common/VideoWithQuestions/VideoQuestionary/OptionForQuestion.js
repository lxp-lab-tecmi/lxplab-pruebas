import React from "react";

export const OptionForQuestion = ({ index, text, handleSelectAnswer, checked, abcIndexing = true }) => {
  const getLetterIndex = (index) => "ABCDEFGHIJKLMNPQRSTUVWXYZ"[index];

  return (
    <div className="option" onClick={handleSelectAnswer}>
      <div className={"checkBox " + (checked ? "checked" : "")}>
        {abcIndexing ? getLetterIndex(index) : index + 1}
      </div>
      <div className="questionText">{text}</div>
    </div>
  );
};
