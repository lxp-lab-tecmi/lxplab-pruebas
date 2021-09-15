import React from "react";
import { AppRouter } from "./Routes/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./Components/Common/Navbar/Navbar";

import "./Styles/styles.scss";

export const Main = () => {
  const paths = [
    { path: "/", title: "Inicio" }, //
  ];

  return (
    <BrowserRouter>
      <Navbar paths={paths} />
      <div>
        <AppRouter />
      </div>
    </BrowserRouter>
  );
};
