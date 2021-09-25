import React from "react";
import { Switch, Route } from "react-router-dom";
import { IndexScreen } from "../Components/Index/IndexScreen";
import { VideoQuestionary } from "../Components/VideoWithQuestions/VideoWithQuestions";
import { Plantilla2 } from "../Components/Plantilla2/Plantilla2Screen";

export default function AppRouter() {
  return (
    <Switch>
      <Route exact path="/" component={IndexScreen} />
      <Route exact path="/videowithquestions" component={VideoQuestionary} />
      <Route exact path="/plantilla2" component={Plantilla2} />
      <Route render={() => <IndexScreen />} />
    </Switch>
  );
}
