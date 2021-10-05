import React, { Fragment } from "react";
import { BottomBar } from "./BottomBar";

export const Annotation = ({
  questionData,
  handleGoBack,
  canUseButtons,
  setCanUseButtons,
  handleSubmitAnswer,
}) => {
  return (
    <Fragment>
      <div className="w-100 h-100 d-flex align-items-center">
        <span style={{ height: "10px", minHeight: "10px" }}>&thinsp;</span>
        <h3 className="text-center px-3">{questionData.question}</h3>
      </div>
      <BottomBar
        selectedOption={true}
        doesOptionsHaveScrollBar={false}
        okButton={questionData.okButtonText}
        handleSubmitAnswer={handleSubmitAnswer}
        handleGoBack={canUseButtons ? () => handleGoBack() & setCanUseButtons(false) : () => {}}
      />
    </Fragment>
  );
};
