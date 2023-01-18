import React, { useState } from "react";
import P5Wrapper from "react-p5-wrapper";
import sketch from "./sketch";
import PageWrapper from "./PageWrapper";
import LandingPage from "./LandingPage/LandingPage";
// import Header from './NavBar/Header';

function Starfield() {
  return (
    <div>
      <LandingPage />
      <P5Wrapper
        // rotation={50}
        sketch={sketch}
      />
    </div>
  );
}

export default Starfield;
