import React from 'react';
import Description from './Description';


const text = {
  name: "BLERDEBLERB🗯",
  font: "blerbFont",
  url: "https://serene-waters-68948.herokuapp.com/",
  imgUrl: "https://i.ibb.co/LRcL8Fn/Blerdeblerb-screenshot.png",
  description: " Blerdeblerb is a Twitter-clone.",
  tech: [
    "React with Redux and React Router"
    , "Node.js and Express"
    , "MongoDB and Mongoose"
    , "Axios for data fetching"
    , "Material-UI"
    , "JSON web tokens"
    , "Multer and Sharp for image uploading."
  ],
  features: [
    "Basic Twitter-like functionality",
    "Post blerbs to your feed.",
    "Follow your friends' blerbs",
    "LIKE and REBLERB your friends' blerbs",
    "Customize your profile with a user image and bio"
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


