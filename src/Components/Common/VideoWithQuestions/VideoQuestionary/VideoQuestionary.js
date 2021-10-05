import React, { useState, useRef } from "react";

import { useMouseAndTouch } from "../Context/MouseAndTouchContext";
import { Annotation } from "./Annotation";
import { Question } from "./Question";

export const VideoQuestionary = ({
  time,
  display,
  handleGoBack,
  questionData,
  totalQuestions,
  handleSubmitAnswer,
}) => {
  const mouseAndTouchState = useMouseAndTouch();

  const [canUseButtons, setCanUseButtons] = useState(false);

  if (!display) return null;

  // If it can't use the buttons but the mouse is not clicked, then you can use them
  if (!canUseButtons && !mouseAndTouchState.clicked) setTimeout(() => setCanUseButtons(true), 100);

  return (
    <div className="video-questionary noselect">
      <div className="question-with-options">
        {/* Check if the question is an annotation in reality */}
        {questionData.question_type === "annotation" ? (
          <Annotation
            questionData={questionData}
            handleGoBack={handleGoBack}
            canUseButtons={canUseButtons}
            setCanUseButtons={setCanUseButtons}
            handleSubmitAnswer={() => handleSubmitAnswer(true, time)}
          />
        ) : (
          <Question
            time={time}
            questionData={questionData}
            handleGoBack={handleGoBack}
            canUseButtons={canUseButtons}
            totalQuestions={totalQuestions}
            setCanUseButtons={setCanUseButtons}
            handleSubmitAnswer={handleSubmitAnswer}
          />
        )}
      </div>
    </div>
  );
};
