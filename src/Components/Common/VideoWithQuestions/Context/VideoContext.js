import { useContext, createContext, useState, useRef } from "react";

const VideoDurationContext = createContext();
const VideoDurationUpdateContext = createContext();
const VideoPlayingContext = createContext();
const VideoPlayingUpdateContext = createContext();
const VideoFractionContext = createContext();
const VideoFractionUpdateContext = createContext();
const VideoRefContext = createContext();
const VideoPlayedSecondsContext = createContext();

export const useVideoDuration = () => useContext(VideoDurationContext);
export const useVideoDurationUpdate = () => useContext(VideoDurationUpdateContext);
export const useVideoPlaying = () => useContext(VideoPlayingContext);
export const useVideoPlayingUpdate = () => useContext(VideoPlayingUpdateContext);
export const useVideoFraction = () => useContext(VideoFractionContext);
export const useVideoFractionUpdate = () => useContext(VideoFractionUpdateContext);
export const useVideoRef = () => useContext(VideoRefContext);
export const useVideoPlayedSeconds = () => useContext(VideoPlayedSecondsContext);

export function VideoProvider({ children }) {
  const [playing, setPlaying] = useState(false); // If the video is playing or is paused
  const [videoDuration, setVideoDuration] = useState(0); // In seconds, with decimals representing ms
  const [videoFraction, setVideoFraction] = useState(0); // Going from 0 to 1

  const videoRef = useRef();

  return (
    <VideoDurationContext.Provider value={videoDuration}>
      <VideoDurationUpdateContext.Provider value={setVideoDuration}>
        <VideoPlayingContext.Provider value={playing}>
          <VideoPlayingUpdateContext.Provider value={setPlaying}>
            <VideoFractionContext.Provider value={videoFraction}>
              <VideoFractionUpdateContext.Provider value={setVideoFraction}>
                <VideoPlayedSecondsContext.Provider value={videoFraction * videoDuration}>
                  <VideoRefContext.Provider value={videoRef}>{children}</VideoRefContext.Provider>
                </VideoPlayedSecondsContext.Provider>
              </VideoFractionUpdateContext.Provider>
            </VideoFractionContext.Provider>
          </VideoPlayingUpdateContext.Provider>
        </VideoPlayingContext.Provider>
      </VideoDurationUpdateContext.Provider>
    </VideoDurationContext.Provider>
  );
}
