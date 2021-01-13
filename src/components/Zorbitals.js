import React from 'react';
import Description from './Description';


const text = {
  name: "zOrbitals",
  font: "z",
  url: "https://serene-waters-68948.herokuapp.com/",
  imgUrl: "https://i.ibb.co/YTbzxf8/Screen-Shot-2020-12-10-at-2-02-42-AM.png",
  description: "zOrbitals is an animation made with p5.js",
  tech: [
    "p5.js"
    , "Javascript"
  ],
  features: [
    "The familiar \"Starfield\" animation appropriated from the classic screensaver which we all love.",
    "Orbitting \"zOrbitals\" modeled using the physics equation for gravity",
    "A subtly glimmering backdrop of twinkling stars",
    "A sequencer which activates different stages of the animation using setInterval and setTimeout."
  ]
}

function Blerdeblerb() {

  return (
    <Description
      text={text}
    />
  )
}

export default Blerdeblerb;