import React from "react";
import VideoWithQuestions from "../Common/VideoWithQuestions";

const questions = {
  // The key of the values represents the milliseconds in which the question is goin to be shown
  60000: {
    question: "¿Cuánto es 2 + 2?",
    question_type: "closed", // There could also be a "boolean", and an "open" type.
    correct_answers: ["4"], // This is the correct answer that will be accepted
    // incorrect_answers: ["3", "2", "5"], // and the incorrect answers
    incorrect_answers: ["3", "2", "5", "6", "7", "8"], // Example of multiple answers
  },

  [2 * 60 * 1000]: {
    question: "Ejemplo verdadero o falso",
    question_type: "boolean",
    correct_answers: ["Verdadero"],
    incorrect_answers: ["Falso"],
  },

  [3 * 60 * 1000]: {
    question: "Ejemplo de texto largo en respuestas",
    question_type: "closed",
    correct_answers: [
      "Sed velit dignissim sodales ut eu sem integer. Feugiat in ante metus dictum at tempor. Ut sem nulla pharetra diam sit amet. Metus vulputate eu scelerisque felis. Eu augue ut lectus arcu bibendum at. Id nibh tortor id aliquet lectus proin nibh nisl condimentum. Nunc aliquet bibendum enim facilisis gravida neque. Egestas integer eget aliquet nibh praesent tristique. Dui sapien eget mi proin sed libero enim. Ac auctor augue mauris augue.",
    ],
    incorrect_answers: [
      "Est ullamcorper eget nulla facilisi etiam. Placerat duis ultricies lacus sed. In vitae turpis massa sed elementum tempus egestas sed sed. Aliquet enim tortor at auctor urna nunc id cursus metus. Platea dictumst vestibulum rhoncus est. Amet nisl purus in mollis. Nam libero justo laoreet sit amet cursus. Enim eu turpis egestas pretium aenean pharetra magna. Phasellus egestas tellus rutrum tellus. Scelerisque in dictum non consectetur a erat nam at lectus. Tellus in metus vulputate eu scelerisque. Facilisis gravida neque convallis a cras semper auctor neque vitae.",
    ],
  },

  [4 * 60 * 1000]: {
    question: "Ejemplo pregunta abierta.",
    question_type: "open",
    correct_answers: ["comida", "alimento"], // They are not case-sensitive, so "COMIDA" === "comida"
    incorrect_answers: [], // Empty for open questions
  },
};

export const VideoQuestionary = () => {
  return (
    <div style={{ maxWidth: "815px" }}>
      <VideoWithQuestions
        url={"https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"}
        questions={questions}
      />
    </div>
  );
};
