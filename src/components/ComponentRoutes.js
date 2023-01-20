import React from "react";
import { Switch, useRouteMatch, useLocation, Route } from "react-router-dom";

//Components
import CV from "./CV/CV";
import Zybriqs from "./Pages/Zybriqs";
import Content from "./Portfolio/Content";
import Blerdeblerb from "./Pages/Blerdeblerb";
import Zorbitals from "./Pages/Zorbitals";
import Walker from "./Pages/Walker";
import AVL from "./Pages/AVL";
import Trampoline from "./Pages/Trampoline";
import Starfield from "./Starfield";
import ClosestPair from "./Pages/ClosestPair";
import styled from "styled-components";

export default function ComponentRoutes() {
  const match = useRouteMatch();
  const location = useLocation();
  console.log("MATCH: ", match);
  console.log("LOCATION: ", location);

  return (
    <Switch>
      <Route exact path="/starfield">
        <Starfield />
      </Route>
      <Route exact path="/">
        <Starfield />
      </Route>
      <Route exact path="/portfolio">
        <Content />
      </Route>
      <Route path="/cv">
        <CV />
      </Route>
      <Route path="/Zybriqs">
        <Zybriqs />
      </Route>
      <Route path="/Blerdeblerb">
        <Blerdeblerb />
      </Route>
      <Route path="/zorbitals">
        <Zorbitals />
      </Route>
      <Route path="/walker">
        <Walker />
      </Route>
      <Route path="/trampoline">
        <Trampoline />
      </Route>
      <Route path="/avl">
        <AVL />
      </Route>
      <Route path="/closestpair">
        <ClosestPair /> 
      </Route>
    </Switch>
  );
}
