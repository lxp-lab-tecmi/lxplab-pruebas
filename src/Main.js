import React from "react";
import AppRouter from "./Routes/AppRouter";
import { BrowserRouter } from "react-router-dom";

import "./Styles/styles.scss";

export const Main = () => {
  return (
    <BrowserRouter>
      {/*<Navbar paths={pathsToDraw} */}
      <React.Fragment>
        <AppRouter />
      </React.Fragment>
    </BrowserRouter>
  );
};
