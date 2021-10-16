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

import isItTimeToShowQuestions from "./VideoQuestionary/isItTimeToShowQuestions";
import { VideoQuestionary } from "./VideoQuestionary/VideoQuestionary";
import { VideoControls } from "./VideoControls/VideoControls";
import React, { useState, useRef, useEffect } from "react";
import { VideoResults } from "./VideoResults/VideoResults";
import { VideoPlayer } from "./VideoPlayer/VideoPlayer";
import countQuestions from "./countQuestions";
import { nanoid } from "nanoid";
import axios from "axios";

const API_URL = "http://localhost:3000";
// const API_URL = "https://video-api.josefabio.com";

export const VideoWithQuestions = ({ videoID }) => {
  const playing = useVideoPlaying();
  const videoDuration = useVideoDuration();
  const playedSeconds = useVideoPlayedSeconds();
  const videoFraction = useVideoFraction();

  const setPlaying = useVideoPlayingUpdate();
  const setVideoFraction = useVideoFractionUpdate();
  const setVideoDuration = useVideoDurationUpdate();

  const [questions, setQuestions] = useState();
  const [url, setURL] = useState();
  useEffect(
    () =>
      axios.get(`${API_URL}/videoQuestion/${videoID}`).then(({ data: { data, code, message } }) => {
        if (code === 1) {
          const { video_url, questions } = data;

          // Add an index to each question
          const questionsIndexed = { ...questions };
          let i = 0;
          for (let [key, questionsArr] of Object.entries(questions))
            for (let j = 0; j < questionsArr.length; j++)
              if (questionsIndexed[key][j].question_type !== "annotation") questionsIndexed[key][j].index = i++;

          setQuestions(questionsIndexed);
          setURL(video_url);
        } else {
          console.log("Error fetching data:", message);
        }
      }),
    [videoID]
  );

  const [userID] = useState(nanoid());

  const videoRef = useVideoRef();
  const videoHolderRef = useRef();

  // At first load, focus the video player, so that the user can use keyboard to control it
  useEffect(() => videoHolderRef?.current?.focus(), [videoHolderRef]);

  const [timesToWatchFor, setTimesToWatchFor] = useState([]);
  useEffect(() => {
    if (questions)
      setTimesToWatchFor(
        Object.keys(questions)
          .filter((t) => {
            for (let { answered } of questions[t]) if (answered) return false;
            return true;
          }) // Only select those questions which don't have an answer yet
          .map((t) => parseInt(t))
      );
  }, [questions]);

  // This const will be null if no question should be showed, or it will be equal to the time un ms
  // which is useful because is the key of the object questionary
  const displayQuestions = isItTimeToShowQuestions({ timesToWatchFor, playedSeconds });

  // Show the question if there is one
  useEffect(() => {
    if (playedSeconds !== 0)
      if (displayQuestions) {
        setPlaying(false);
        setVideoFraction(displayQuestions / 1000 / videoDuration);
        videoRef.current.seekTo(displayQuestions / 1000 / videoDuration, "fraction");
        videoHolderRef.current.blur();
      } else videoHolderRef.current.focus();
  }, [displayQuestions, playing, videoFraction]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleKey = (a) => {
    if (displayQuestions) return; // Don't handle keys when a question is being displayed

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

  function handleSubmitAnswer(answers, time) {
    // Add the answer to the state
    setQuestions((prevQuestionary) => {
      const copy = JSON.parse(JSON.stringify(prevQuestionary));
      for (let i = 0; i < answers.length; i++) copy[time][i].answered = answers[i];
      return copy;
    });

    // Play the video again
    setPlaying(true);
  }

  function handleOnProgress({ played }) {
    // This is in case the user manages to start playing the video again when a question is showing,
    // like using the PIP of Firefox
    if (displayQuestions && videoFraction !== played) {
      setPlaying(true);
      setPlaying(false);
    }

    if (videoFraction !== played) setVideoFraction(played);
  }

  const handleOnEnded = () => {
    axios.post(`${API_URL}/termino/${userID}`).catch((e) => console.log(e));
    setPlaying(false);
  };

  return questions ? (
    <MouseAndTouchProvider>
      <div className="videoHolder" ref={videoHolderRef} onKeyDown={handleKey} tabIndex="-1">
        <VideoPlayer
          url={url}
          playing={playing}
          videoRef={videoRef}
          togglePlaying={togglePlaying}
          handleOnEnded={handleOnEnded}
          setVideoDuration={setVideoDuration}
          handleOnProgress={handleOnProgress}
        />

        {videoFraction === 1 ? (
          <VideoResults
            questions={questions}
            handleRepeatVideo={() => {
              setVideoFraction(0);
              setPlaying(true);
              setQuestions((prev) => {
                const tempPrev = { ...prev };
                const times = Object.keys(tempPrev);
                for (let time of times) delete tempPrev[time].answered;
                return tempPrev;
              });
            }}
          />
        ) : null}

        <VideoControls
          questionary={questions}
          videoHolderRef={videoHolderRef}
          displayingQuestion={Boolean(displayQuestions)}
        />

        <VideoQuestionary
          time={displayQuestions}
          display={Boolean(displayQuestions)}
          handleGoBack={() => handleGoBack(5)}
          handleSubmitAnswer={handleSubmitAnswer}
          totalQuestions={countQuestions(questions)}
          questionsData={questions[displayQuestions]}
        />
      </div>
    </MouseAndTouchProvider>
  ) : null;
};
