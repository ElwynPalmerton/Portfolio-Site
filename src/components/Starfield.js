import React, { useState } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch'




function Starfield() {

  return (
    <div style={{
      position: "absolute"
    }}>
      <P5Wrapper
        // paused={paused}
        rotation={50}
        sketch={sketch}
      />
    </div>)
}


export default Starfield;
