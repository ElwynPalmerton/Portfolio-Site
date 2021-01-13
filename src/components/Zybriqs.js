import React from 'react';
import Description from './Description';


const text = {
  name: "Zybriqs",
  font: "zybriqsTitle",
  url: "http://www.zybriqs.com/",
  imgUrl: "https://i.ibb.co/ZYDyNnC/Screen-Shot-2020-12-04-at-3-26-08-PM.png",
  description: " Zybriqs is an interactive ball and block animation.",
  tech: [
    "p5.js"
    , "Javascript"
    , "Node.js and Express"
    , "Express Sessions"
    , "Passport.js"
    , "MongoDB and Mongoose"
    , "EJS",
    , "BootStrap"
  ],
  features: [
    "A unique interactive animation which models gravity, wind, acceleration, and drag.",
    "Register and login to create and save your own Zybriqs arrangements.",
    "Change the HSLA colors of individual elements",
    "Draw blocks, accelerators, and drag areas on the Zybriqs canvas.",
    "Activate several preset arrangements",
    "Play God by changing the strength and direction of gravitational force.",
  ]
}

function Zybriqs() {

  return (
    <Description
      text={text}

    />
  )
}

export default Zybriqs;


