import React, { useState } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch'
import PageWrapper from './PageWrapper';
import LandingPage from './LandingPage';
// import Header from './NavBar/Header';



function Starfield() {

  return (
    <div>
      <h1>hello</h1>
      {/* <LandingPage /> */}
      <P5Wrapper
        // rotation={50}
        sketch={sketch}
      />
    </div>

  )
}


export default Starfield;
