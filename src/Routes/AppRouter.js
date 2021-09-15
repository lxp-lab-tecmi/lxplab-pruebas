import React from "react";
import { Switch, Route } from "react-router-dom";
import { IndexScreen } from "../Components/Index/IndexScreen";

export const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={IndexScreen} />
      <Route render={() => <p>Upssss... No encontramos lo que buscabas</p>} />
    </Switch>
  );
};
