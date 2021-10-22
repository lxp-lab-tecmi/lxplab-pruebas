import React from "react";

import { useVideoDuration, useVideoPlayedSeconds } from "../Context/VideoContext";

export const VideoTimeStamp = () => {
  const videoDuration = useVideoDuration();
  const playedSeconds = useVideoPlayedSeconds();

  const addCero = (num) => `${num <= 9 ? "0" : ""}${num}`;

  function parseSeconds(seconds) {
    const hours = parseInt(seconds / 3600);
    const minutes = parseInt((seconds = seconds - hours * 3600) / 60);
    seconds = parseInt(seconds - minutes * 60);

    return `${hours ? `${addCero(hours)}:` : ""}${addCero(minutes)}:${addCero(seconds)}`;
  }

  const parsedVideoDuration = parseSeconds(parseInt(videoDuration));
  const parsedPlayedSeconds = parseSeconds(playedSeconds);

  return <p className="time-stamp">{parsedPlayedSeconds + " / " + parsedVideoDuration}</p>;
};
