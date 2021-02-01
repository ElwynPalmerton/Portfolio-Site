import React from 'react';
import Description from './Description';
import PageWrapper from './PageWrapper';

const text = {
  name: "AVL Tree",
  font: "walker",
  url: "https://elwynpalmerton.github.io/AVL-Tree/",
  imgUrl: "https://i.ibb.co/nb8Rvhk/Screen-Shot-2021-01-04-at-6-17-11-PM.png",
  description: "Automatically generates a balanced binary tree",
  tech: [
    "p5.js"
    , "Javascript"
  ],
  features: [
    "Generates an AVL tree (named after inventors Adelson-Velsky and Landis.)",
    "AVL trees are automatically balancing. No two child subtrees differ in height by more than one node.",
    "Uses OOP with javascript prototyping to build a Node class and recursively generate nodes."
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