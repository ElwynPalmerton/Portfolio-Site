import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
// import CV from "./CV";
// import Zybriqs from "./Zybriqs";
// import Content from "./Content";
// import Blerdeblerb from "./Blerdeblerb";
// import Zorbitals from "./Zorbitals";
// import Walker from "./Walker";
// import AVL from "./AVL";
// import Trampoline from "./Trampoline";
// import Starfield from "./Starfield";
import styled from "styled-components";

import ComponentRoutes from "./ComponentRoutes";

const Footer = styled.footer`
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  color: #d5e3f5;
  font-family: "Nanum Gothic", sans-serif;
`;

function Layout(props) {
  // console.log(props.word);
  return (
    <div className="page-container">
      {/* <SimpleMediaQuery /> */}
      {/* Contains Header */}
      <Router>
        <div>
          <ComponentRoutes />
          {/* <Switch>
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
          </Switch> */}
        </div>
      </Router>

      <Footer style={{ textAlign: "center" }}>
        Elwyn Palmerton ©{new Date().getFullYear()}
      </Footer>
    </div>
  );
}

export default Layout;
