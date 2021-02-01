import React from 'react';
import Description from './Description';
import PageWrapper from './PageWrapper';

const text = {
  name: "Walker",
  font: "walker",
  url: "https://elwynpalmerton.github.io/walker/",
  imgUrl: "https://i.ibb.co/QKbPhdr/Screen-Shot-2021-01-04-at-5-47-47-PM.png",
  description: "A random walker animation in p5.js",
  tech: [
    "p5.js"
    , "Javascript"
  ],
  features: [
    "A Simple walker animation in p5.js"
  ]
}

function Blerdeblerb() {

  return (
    <PageWrapper
      center={
        <Description
          text={text}
        />
      } />
  )
}

export default Blerdeblerb;