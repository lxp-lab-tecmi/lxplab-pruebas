import React, { Fragment } from "react";
import { BottomBar } from "./BottomBar";

export const Annotation = ({
  handleGoBack,
  canUseButtons,
  annotationData,
  setCanUseButtons,
  handleSubmitAnswer,
}) => {
  return (
    <Fragment>
      <div className="w-100 h-100 d-flex align-items-center">
        <span style={{ height: "10px", minHeight: "10px" }}>&thinsp;</span>
        <h3 className="text-center px-3">{annotationData.question}</h3>
      </div>
      <BottomBar
        selectedOption={true}
        doesOptionsHaveScrollBar={false}
        okButton={annotationData.okButtonText}
        handleSubmitAnswer={handleSubmitAnswer}
        handleGoBack={canUseButtons ? () => handleGoBack() & setCanUseButtons(false) : () => {}}
      />
    </Fragment>
  );
};
