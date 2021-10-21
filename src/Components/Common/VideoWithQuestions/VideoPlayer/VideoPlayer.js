import React from "react";
import ReactPlayer from "react-player";

export const VideoPlayer = ({
  url,
  playing,
  videoRef,
  togglePlaying,
  handleOnEnded,
  setVideoDuration,
  handleOnProgress,
}) => {
  return (
    <React.Fragment>
      <ReactPlayer
        url={url}
        volume={1}
        pip={false}
        width="100%"
        loop={false}
        height="100%"
        ref={videoRef}
        playing={playing}
        playsinline={true}
        onClick={togglePlaying}
        onEnded={handleOnEnded}
        className="react-player"
        onDuration={setVideoDuration}
        onProgress={handleOnProgress}
      />
    </React.Fragment>
  );
};
