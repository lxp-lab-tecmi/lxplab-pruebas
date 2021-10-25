import React from "react";
import { Switch, Route } from "react-router-dom";
import { CatalogueScreen } from "../Components/Catalogue/CatalogueScreen";
import { IndexScreen } from "../Components/Index/IndexScreen";
import { VideoQuestionary } from "../Components/VideoWithQuestions/VideoWithQuestions";
import { Cima1Screen } from "../Components/templates/cima-1/Cima1Screen";
import { Topic1Screen } from "../Components/templates/cima1-topic1/Topic1Screen";
import { DragAndDropScreen } from "../Components/DragAndDrop/DragAndDropScreen";

export default function AppRouter() {
  return (
    <Switch>
      <Route exact path="/" component={IndexScreen} />
      <Route exact path="/videowithquestions" component={VideoQuestionary} />
      <Route exact path="/filter" component={CatalogueScreen} />
      <Route exact path="/template-cima1" component={Cima1Screen} />
      <Route exact path="/cima1-topic1" component={Topic1Screen} />
      <Route exact path="/drag-and-drop" component={DragAndDropScreen} />
      <Route render={() => <IndexScreen />} />
    </Switch>
  );
}
