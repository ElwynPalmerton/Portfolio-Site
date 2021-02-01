import React from 'react';
import Description from './Description';
import PageWrapper from './PageWrapper';

const text = {
  name: "BLERDEBLERB🗯",
  font: "blerbFont",
  url: "https://www.blerdeblerb.com/",
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
    "Twitter-like functionality",
    "Post blerbs to your feed.",
    "Follow your friends' blerbs",
    "LIKE and REBLERB your friends' blerbs",
    "Customize your profile with a user image and bio"
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


