import React, { useState, useRef } from "react";

import { useMouseAndTouch } from "../Context/MouseAndTouchContext";
import { Annotation } from "./Annotation";
import { Question } from "./Question";

export const VideoQuestionary = ({
  time,
  display,
  handleGoBack,
  questionsData,
  totalQuestions,
  handleSubmitAnswer,
}) => {
  const mouseAndTouchState = useMouseAndTouch();

  const [canUseButtons, setCanUseButtons] = useState(false);

  if (!display) return null;

  // If it can't use the buttons but the mouse is not clicked, then you can use them
  if (!canUseButtons && !mouseAndTouchState.clicked) setTimeout(() => setCanUseButtons(true), 100);

  const isAnnotation = questionsData.filter(({ question_type: t }) => t === "annotation").length > 0;

  return (
    <div className="video-questionary noselect">
      <div className="question-with-options">
        {/* Check if the question is an annotation */}
        {isAnnotation ? (
          <Annotation
            handleGoBack={handleGoBack}
            canUseButtons={canUseButtons}
            annotationData={questionsData[0]}
            setCanUseButtons={setCanUseButtons}
            handleSubmitAnswer={() => handleSubmitAnswer([true], time)}
          />
        ) : (
          <Question
            time={time}
            questionsData={questionsData}
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
