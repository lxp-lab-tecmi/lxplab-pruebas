import React from "react";

import VideoWithQuestions from "../Common/VideoWithQuestions";

// const videoID = "6169e71e486d222a5e57d1fd";
const videoID = "61649d00f6530548436fae73";

export const VideoQuestionary = () => {
  return (
    <div style={{ maxWidth: "815px" }}>
      <VideoWithQuestions videoID={videoID} />
    </div>
  );
};
