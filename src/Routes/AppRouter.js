import React from "react";
import { Switch, Route } from "react-router-dom";
import IndexScreen from "../Components/Index/";
import VideoQuestionary from "../Components/VideoWithQuestions";

export default function AppRouter() {
  return (
    <Switch>
      <Route exact path="/" component={IndexScreen} />
      <Route exact path="/videowithquestions" component={VideoQuestionary} />
      <Route render={() => <IndexScreen />} />
    </Switch>
  );
}
