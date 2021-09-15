import React, { useRef } from "react";

import ICONS from "../../../../../Utils/icons";

import { useVideoPlayingUpdate, useVideoPlaying } from "../../Context/VideoContext";

export default function PlayPauseButton({ videoHolderRef }) {
  const setPlaying = useVideoPlayingUpdate();
  const playing = useVideoPlaying();
  const playButtonRef = useRef();

  return (
    <button
      tabIndex="-1"
      ref={playButtonRef}
      className="icon-button"
      onFocus={() => {
        playButtonRef.current.blur();
        videoHolderRef.current.focus();
        // When on focus, exit and focus again on the
        // video holder, which will handle all the keys
      }}
      onClick={() => setPlaying((prevPlaying) => !prevPlaying)}
    >
      {playing ? ICONS.play(25, 25) : ICONS.pause(25, 25)}
    </button>
  );
}
