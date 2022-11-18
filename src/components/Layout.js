import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

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
  return (
    <div className="page-container">
      <Router basename="/#!/index.html">
        <div>
          <ComponentRoutes />
        </div>
      </Router>
      <Footer style={{ textAlign: "center" }}>
        Elwyn Palmerton ©{new Date().getFullYear()}
      </Footer>
    </div>
  );
}

export default Layout;
