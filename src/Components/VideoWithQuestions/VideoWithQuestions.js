import React from "react";
import VideoWithQuestions from "../Common/VideoWithQuestions";

// const questionsExample = {
//   // The key of the values represents the milliseconds in which the question is goin to be shown
//   60000: {
//     question: "¿Cuánto es 2 + 2?",
//     question_type: "closed", // There could also be a "boolean", and an "open" type.
//     correct_answers: ["4"], // This is the correct answer that will be accepted
//     // incorrect_answers: ["3", "2", "5"], // and the incorrect answers
//     incorrect_answers: ["3", "2", "5", "6", "7", "8"], // Example of multiple answers
//   },

//   [2 * 60 * 1000]: {
//     question: "Ejemplo verdadero o falso",
//     question_type: "boolean",
//     correct_answers: ["Verdadero"],
//     incorrect_answers: ["Falso"],
//   },

//   [3 * 60 * 1000]: {
//     question: "Ejemplo de texto largo en respuestas",
//     question_type: "closed",
//     correct_answers: [
//       "Sed velit dignissim sodales ut eu sem integer. Feugiat in ante metus dictum at tempor. Ut sem nulla pharetra diam sit amet. Metus vulputate eu scelerisque felis. Eu augue ut lectus arcu bibendum at. Id nibh tortor id aliquet lectus proin nibh nisl condimentum. Nunc aliquet bibendum enim facilisis gravida neque. Egestas integer eget aliquet nibh praesent tristique. Dui sapien eget mi proin sed libero enim. Ac auctor augue mauris augue.",
//     ],
//     incorrect_answers: [
//       "Est ullamcorper eget nulla facilisi etiam. Placerat duis ultricies lacus sed. In vitae turpis massa sed elementum tempus egestas sed sed. Aliquet enim tortor at auctor urna nunc id cursus metus. Platea dictumst vestibulum rhoncus est. Amet nisl purus in mollis. Nam libero justo laoreet sit amet cursus. Enim eu turpis egestas pretium aenean pharetra magna. Phasellus egestas tellus rutrum tellus. Scelerisque in dictum non consectetur a erat nam at lectus. Tellus in metus vulputate eu scelerisque. Facilisis gravida neque convallis a cras semper auctor neque vitae.",
//     ],
//   },

//   [4 * 60 * 1000]: {
//     question: "Ejemplo pregunta abierta.",
//     question_type: "open",
//     correct_answers: ["comida", "alimento"], // They are not case-sensitive, so "COMIDA" === "comida"
//     incorrect_answers: [], // Empty for open questions
//   },
// };

const getMs = (min = 0, sec = 0, ms = 0) => min * 60000 + sec * 1000 + ms;
const questions = {
  [getMs(0, 29, 100)]: {
    question: "¿Cuál es el origen de la palabra concepto?",
    question_type: "closed",
    correct_answers: ["Viene del Latín “Conceptus” y este a su vez del verbo “Concipere” que significa concebir."],
    incorrect_answers: [
      "Del Proverbio Chino “Más vale concepto en mano, que mil ideas flotando”.",
      "De la palabra griega κοινός (koinós) que significa lo común o lo que alguien piensa.",
    ],
  },

  [getMs(0, 29, 101)]: {
    question: "¿Qué es un concepto?",
    question_type: "closed",
    correct_answers: ["Es la idea que concibe o forma el entendimiento."],
    incorrect_answers: ["Una idea.", "Proceso creativo de aterrizar y plasmar ideas sin ningún motivo."],
  },

  [getMs(1, 3)]: {
    question: "¿Cómo se le conoce globalmente al proceso de bocetar?",
    question_type: "closed",
    correct_answers: ["Sketching"],
    incorrect_answers: ["Rayar", "Aventar el lápiz", "Doodling"],
  },

  [getMs(1, 20)]: {
    question: "¿Para qué sirve el “sketching”?",
    question_type: "closed",
    correct_answers: [
      "Para resumir de manera breve, plasmar y comunicar, mediante frases, esquemas o dibujos rápidos una idea.",
    ],
    incorrect_answers: [
      "Hacer dibujos y representaciones estéticas.",
      "Presumir habilidades que otros no tienen.",
      "Conseguir trabajo diseñando productos, experiencias y/o servicios.",
    ],
  },

  [getMs(1, 34)]: {
    question: "Veremos 3 tipos de ilustración.",
    question_type: "closed",
    correct_answers: ["Dibujo de Líneas", "Garabato o Doodle", "Caricatura"],
    incorrect_answers: [],
  },

  [getMs(1, 48)]: {
    question: "Piensa ahora: ¿cuál era/es tu caricatura, serie animada o tipo de ilustración favorita?",
    question_type: "annotation",
    okButtonText: "Listo",
  },
};

export const VideoQuestionary = () => {
  return (
    <div style={{ maxWidth: "815px" }}>
      <VideoWithQuestions questions={questions} url={"https://josefabio.com/f/sketchmoji.mp4"} />
    </div>
  );
};
