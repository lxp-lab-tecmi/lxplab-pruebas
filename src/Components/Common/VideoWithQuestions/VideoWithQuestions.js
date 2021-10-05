import { MouseAndTouchProvider } from "./Context/MouseAndTouchContext";
import {
  useVideoRef,
  useVideoPlaying,
  useVideoDuration,
  useVideoFraction,
  useVideoPlayingUpdate,
  useVideoPlayedSeconds,
  useVideoDurationUpdate,
  useVideoFractionUpdate,
} from "./Context/VideoContext";

import isItTimeToShowQuestion from "./VideoQuestionary/isItTimeToShowQuestion";
import { VideoQuestionary } from "./VideoQuestionary/VideoQuestionary";
import { VideoControls } from "./VideoControls/VideoControls";
import React, { useState, useRef, useEffect } from "react";
import { VideoResults } from "./VideoResults/VideoResults";
import ReactPlayer from "react-player";
import { nanoid } from "nanoid";
import axios from "axios";

const API_URL = "https://video-api.josefabio.com";

export const VideoWithQuestions = ({ url, questions }) => {
  const playing = useVideoPlaying();
  const videoDuration = useVideoDuration();
  const playedSeconds = useVideoPlayedSeconds();
  const videoFraction = useVideoFraction();

  const setPlaying = useVideoPlayingUpdate();
  const setVideoFraction = useVideoFractionUpdate();
  const setVideoDuration = useVideoDurationUpdate();

  const [questionary, setQuestionary] = useState(
    ((newQuestions) => {
      // Add the index to every question and sort them by time
      const times = Object.keys(questions).sort((a, b) => a - b);
      for (let i = 0; i < times.length; i++) newQuestions[times[i]] = { ...questions[times[i]], index: i };
      return newQuestions;
    })({})
  );

  const [userID] = useState(nanoid());

  const videoRef = useVideoRef();
  const videoHolderRef = useRef();

  // At first load, focus the video player, so that the user can use keyboard to control it
  useEffect(() => videoHolderRef.current.focus(), []);

  const timesToWatchFor = Object.keys(questionary)
    .filter((t) => questionary[t].answered === undefined) // Only select those questions which don't have an answer yet
    .map((t) => parseInt(t));

  // This const will be null if no question should be showed, or it will be equal to the time un ms
  // which is useful because is the key of the object questionary
  const displayQuestion = isItTimeToShowQuestion({ timesToWatchFor, playedSeconds });

  // Show the question if there is one
  useEffect(() => {
    if (playedSeconds !== 0)
      if (displayQuestion) {
        setPlaying(false);
        setVideoFraction(displayQuestion / 1000 / videoDuration);
        videoRef.current.seekTo(displayQuestion / 1000 / videoDuration, "fraction");
        videoHolderRef.current.blur();
      } else videoHolderRef.current.focus();
  }, [displayQuestion, playing, videoFraction]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleKey = (a) => {
    if (displayQuestion) return; // Don't handle keys when a question is being displayed

    switch (a.key) {
      case "k":
      case " ":
        togglePlaying();
        break;

      case "ArrowRight":
      case "l":
        seekVideo(2);
        break;
      case "ArrowLeft":
      case "h":
        seekVideo(-2);
        break;

      case "L":
        seekVideo(5);
        break;
      case "H":
        seekVideo(-5);
        break;

      default:
        return;
    }
  };

  const togglePlaying = () => setPlaying((prevPlaying) => (videoFraction !== 1 ? !prevPlaying : false));

  function seekVideo(secondsToSeek) {
    setVideoFraction((prevFraction) => {
      const newFraction = (() => {
        const fractionToSeek = secondsToSeek / videoDuration; // This could be negative if the user is seeking back
        const a = prevFraction + fractionToSeek;
        return a >= 1 ? 1 : a <= 0 ? 0 : a; // Check that the fraction stays between 0 and 1
      })();

      if (newFraction === 1) setPlaying(false);
      videoRef.current.seekTo(newFraction, "fraction");
      return newFraction;
    });
  }

  function handleGoBack(secondsToSeekBack) {
    setPlaying(true);

    seekVideo(-secondsToSeekBack);
    videoHolderRef.current.focus();
  }

  function handleSubmitAnswer(answer, time) {
    if (questionary[time].question_type !== "annotation")
      axios
        .post(`${API_URL}/respuesta/${userID}`, {
          tiempo: +time,
          respuesta: answer + "",
          esCorrecta: questionary[time].correct_answers.map((a) => a.toUpperCase()).includes(answer.toUpperCase()),
        })
        .catch((e) => console.log(e));

    // Add the answer to the state
    setQuestionary((prevQuestionary) => ({
      ...prevQuestionary,
      [time]: { ...prevQuestionary[time], answered: answer },
    }));
    // Play the video again
    setPlaying(true);
  }

  function handleOnProgress({ played }) {
    // This is in case the user manages to start playing the video again when a question is showing,
    // like using the PIP of Firefox
    if (displayQuestion && videoFraction !== played) {
      setPlaying(true);
      setPlaying(false);
    }

    if (videoFraction !== played) setVideoFraction(played);
  }

  return (
    <MouseAndTouchProvider>
      <div className="videoHolder" ref={videoHolderRef} onKeyDown={handleKey} tabIndex="-1">
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
          className="react-player"
          onDuration={setVideoDuration}
          onProgress={handleOnProgress}
          onEnded={() => {
            axios.post(`${API_URL}/termino/${userID}`).catch((e) => console.log(e));
            setPlaying(false);
          }}
        />

        {videoFraction === 1 ? (
          <VideoResults
            questionary={questionary}
            handleRepeatVideo={() => {
              setVideoFraction(0);
              setPlaying(true);
              setQuestionary((prev) => {
                const tempPrev = { ...prev };
                const times = Object.keys(tempPrev);
                for (let time of times) delete tempPrev[time].answered;
                return tempPrev;
              });
            }}
          />
        ) : null}

        <VideoControls
          questionary={questionary}
          videoHolderRef={videoHolderRef}
          displayingQuestion={Boolean(displayQuestion)}
        />

        <VideoQuestionary
          time={displayQuestion}
          display={Boolean(displayQuestion)}
          handleGoBack={() => handleGoBack(5)}
          handleSubmitAnswer={handleSubmitAnswer}
          questionData={questionary[displayQuestion]}
          totalQuestions={Object.values(questionary).filter(({ question_type: t }) => t !== "annotation").length}
        />
      </div>
    </MouseAndTouchProvider>
  );
};
