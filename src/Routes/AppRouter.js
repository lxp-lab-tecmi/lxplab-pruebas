import React from "react";
import { Switch, Route } from "react-router-dom";
import { CatalogueScreen } from "../Components/Catalogue/CatalogueScreen";
import { IndexScreen } from "../Components/Index/IndexScreen";
import { VideoQuestionary } from "../Components/VideoWithQuestions/VideoWithQuestions";

export default function AppRouter() {
  return (
    <Switch>
      <Route exact path="/" component={IndexScreen} />
      <Route exact path="/videowithquestions" component={VideoQuestionary} />
      <Route exact path="/filter" component={CatalogueScreen} />
      <Route render={() => <IndexScreen />} />
    </Switch>
  );
}
