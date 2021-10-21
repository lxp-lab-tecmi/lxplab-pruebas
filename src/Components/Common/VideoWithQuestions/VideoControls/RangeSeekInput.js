import React, { useRef, useEffect, useState } from "react";
import { useMouseAndTouch } from "../Context/MouseAndTouchContext";
import {
  useVideoRef,
  useVideoPlaying,
  useVideoFraction,
  useVideoDuration,
  useVideoPlayingUpdate,
  useVideoFractionUpdate,
} from "../Context/VideoContext";

export const RangeSeekInput = ({ questionary, displayingQuestion }) => {
  const playing = useVideoPlaying();
  const videoFraction = useVideoFraction();
  const videoDuration = useVideoDuration();
  const setPlaying = useVideoPlayingUpdate();
  const mouseAndTouchState = useMouseAndTouch();
  const videoRef = useVideoRef();
  const setVideoFraction = useVideoFractionUpdate();

  const [interactionPoints, setInteractionPoints] = useState([]);
  const [isUsingIt, setIsUsingIt] = useState(false);

  const videoProgressRef = useRef();
  const { x: barX, width: barWidth } = videoProgressRef.current
    ? videoProgressRef.current.getBoundingClientRect()
    : { x: 0, width: 0 };

  const playAfterMove = useRef(false);

  useEffect(() => {
    if (displayingQuestion) {
      playAfterMove.current = false;
      setIsUsingIt(false);
      return;
    }

    if (mouseAndTouchState.clicked && isUsingIt) {
      handleMouseMove();
    } else {
      setIsUsingIt(false);
      if (playAfterMove.current) {
        playAfterMove.current = false;
        setPlaying(videoFraction !== 1); // Play the video only if the end hasn't beet reached
      }
    }
  }, [mouseAndTouchState, isUsingIt]); // eslint-disable-line react-hooks/exhaustive-deps

  function handleMouseMove(x = mouseAndTouchState.x) {
    if (playing && !playAfterMove.current) {
      playAfterMove.current = true;
      setPlaying(false);
    }
    const relativePos = x - barX;
    let newFraction = relativePos / barWidth;
    newFraction = newFraction <= 0 ? 0 : newFraction >= 1 ? 1 : newFraction;
    setVideoFraction(newFraction);

    videoRef.current.seekTo(newFraction, "fraction");
  }

  useEffect(() => {
    if (barX !== 0 && barWidth !== 0) {
      setInteractionPoints(() => {
        const newInteractionPoints = [];
        const seconds = Object.keys(questionary).map((t) => parseInt(t) / 1000);
        for (let second of seconds) {
          const position = (second * barWidth) / videoDuration;
          newInteractionPoints.push(
            <div
              key={second}
              className="interaction-point"
              style={{ left: position + "px" }}
              onClick={() => setTimeout(() => handleMouseMove(position + barX), 1)}
            ></div>
          );
        }
        return newInteractionPoints;
      });
    }
  }, [barX, barWidth, videoDuration]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      ref={videoProgressRef}
      onMouseDown={() => setIsUsingIt(true)}
      onTouchStart={() => setIsUsingIt(true)}
      className="video-progress"
    >
      <div className="progress-bar" style={{ width: videoFraction * 100 + "%" }}>
        {interactionPoints}
      </div>
    </div>
  );
};
