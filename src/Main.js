import React from "react";
import AppRouter from "./Routes/AppRouter";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Common/Navbar/Navbar";

import "./Styles/styles.scss";

export const Main = () => {
  const pathsToDraw = [
    { path: "/", title: "Inicio" },
    { path: "/videowithquestions", title: "Video cuestionario" },
  ];

  return (
    <BrowserRouter>
      {/*<Navbar paths={pathsToDraw} */}
      <React.Fragment>
        <AppRouter />
      </React.Fragment>
    </BrowserRouter>
  );
};
