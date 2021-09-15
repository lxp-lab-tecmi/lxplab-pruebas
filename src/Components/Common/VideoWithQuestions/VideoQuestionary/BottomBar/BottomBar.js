import React from "react";

import ICONS from "../../../../../Utils/icons";

export default function BottomBar({ handleGoBack, selectedOption, handleSubmitAnswer, doesOptionsHaveScrollBar }) {
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

        <button
          disabled={selectedOption === null}
          className={selectedOption === null ? "disabled" : ""}
          onClick={() => handleSubmitAnswer()}
        >
          Responder
          {ICONS.chevronRight(20, 20)}
        </button>
      </div>
    </div>
  );
}
