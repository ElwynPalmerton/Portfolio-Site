import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import CV from "./CV";
import Zybriqs from "./Zybriqs";
import Content from "./Content";
import Blerdeblerb from "./Blerdeblerb";
import Zorbitals from "./Zorbitals";
import Walker from "./Walker";
import AVL from "./AVL";
import Trampoline from "./Trampoline";
import Starfield from "./Starfield";
import styled from "styled-components";

export default function ComponentRoutes() {
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
    </Switch>
  );
}
