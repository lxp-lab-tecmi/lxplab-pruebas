import React from "react";

import { VideoTimeStamp } from "./VideoTimeStamp";
import { RangeSeekInput } from "./RangeSeekInput";
import { PlayPauseButton } from "./PlayPauseButton";

export const VideoControls = ({ questionary, videoHolderRef, displayingQuestion }) => {
  return (
    <div className="videoControls" style={{ display: "flex" }}>
      <PlayPauseButton videoHolderRef={videoHolderRef} />

      <RangeSeekInput questionary={questionary} displayingQuestion={displayingQuestion} />

      <VideoTimeStamp />
    </div>
  );
};
