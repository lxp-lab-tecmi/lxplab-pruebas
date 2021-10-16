import React, { useRef, useEffect } from "react";

export const OpenAnswer = ({ handleSelectAnswer, handleSubmitAnswer, answer }) => {
  const textareaRef = useRef();

  useEffect(() => textareaRef.current.focus(), []);

  const handleKeyDown = ({ keyCode, ctrlKey, metaKey }) =>
    (keyCode === 10 || keyCode === 13) && (ctrlKey || metaKey) && answer?.trim() && handleSubmitAnswer();

  return (
    <div className="options-open-answer">
      <textarea
        rows="1"
        name="Text1"
        ref={textareaRef}
        className="textarea"
        onKeyDown={handleKeyDown}
        value={answer === null ? "" : answer}
        placeholder="Toca aquí para empezar a escribir..."
        onInput={({ target }) => handleSelectAnswer(target.value)}
      ></textarea>
    </div>
  );
};
