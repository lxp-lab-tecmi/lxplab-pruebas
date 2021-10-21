import React from "react";

import ICONS from "../../../../Utils/icons";

export const BottomBar = ({
  okButton = "Responder",
  handleGoBack,
  selectedOptions,
  handleSubmitAnswer,
  doesOptionsHaveScrollBar,
}) => {
  const disable = !selectedOptions ? false : selectedOptions.filter((a) => a === null).length !== 0;

  return (
    <div
      className="bottom-bar-holder"
      style={{
        boxShadow: doesOptionsHaveScrollBar ? `0 ${-4}px 8px 0 rgba(0, 0, 0, 0.2)` : "none",
        zIndex: 99,
      }}
    >
      <div className="bottom-bar">
        <button className="back-button" onClick={handleGoBack}>
          {ICONS.arrowCounterclockwise(18, 18)}
          &thinsp;Volver atrás
        </button>

        <button disabled={disable} className={disable ? "disabled" : ""} onClick={() => handleSubmitAnswer()}>
          {okButton}
          {ICONS.chevronRight(20, 20)}
        </button>
      </div>
    </div>
  );
};
