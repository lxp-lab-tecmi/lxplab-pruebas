import React from "react";
import { Switch, Route } from "react-router-dom";
import { DragAndDrop } from "../Components/DragAndDrop/DragAndDrop";
import IndexScreen from "../Components/Index/";
import { Cima1Screen } from "../Components/templates/cima-1/Cima1Screen";
import { Topic1Screen } from "../Components/templates/cima1-topic1/Topic1Screen";
import VideoQuestionary from "../Components/VideoWithQuestions";

export default function AppRouter() {
  return (
    <Switch>
      <Route exact path="/" component={IndexScreen} />
      <Route exact path="/videowithquestions" component={VideoQuestionary} />
      <Route exact path="/template-cima1" component={Cima1Screen} />
      <Route exact path="/cima1-topic1" component={Topic1Screen} />
      <Route exact path="/drag-and-drop" component={DragAndDrop} />
      <Route render={() => <IndexScreen />} />
    </Switch>
  );
}
