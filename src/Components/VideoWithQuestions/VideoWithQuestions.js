import React from "react";

import VideoWithQuestions from "../Common/VideoWithQuestions";

const videoID = "6169e71e486d222a5e57d1fd";

export const VideoQuestionary = () => {
  return (
    <div style={{ maxWidth: "815px" }}>
      <VideoWithQuestions videoID={videoID} />
    </div>
  );
};
