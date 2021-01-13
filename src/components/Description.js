import React, { useEffect, useState } from 'react';
import BlerbImage from '../assets/blerdeblerb-screenshot.png';
import { Link } from 'react-router-dom';
import Grid from "@material-ui/core/Grid";
import Animate from 'animate.css-react'

import 'animate.css/animate.css'


function Description(props) {


  const intro = "animate__backInLeft";
  const outro = "animate__bounceOut";

  const [currentClassName, setClassName] = useState(intro);
  const [word, setWord] = useState("Hello");

  const items = ["one", "two", "three"]
  return (

    <div>
      <a href={props.text.url}
        style={{ textDecoration: "none" }}
      >
        <h1
          className={props.text.font}
        >{props.text.name}</h1>
      </a>


      <h3
        className="description"
      >
        {props.text.description}
      </h3>

      <img
        style={{
          width: "400px",
          border: "solid #222222 2px",
          borderRadius: "0px",
          marginTop: "1rem",
        }}
        src={props.text.imgUrl}>
      </img>
      <h2
        className="sample"
      >Built with: </h2>
      <ul
        className="sampleText"
      >
        {props.text.tech.map((item, i) => {
          return (
            <li key={i}>
              {item}
            </li>
          )
        })}
      </ul>

      <h2
        className="sample"
      >Features: </h2>
      <ul
        className="sampleText"
      >
        {props.text.features.map((item, i) => {
          return (
            <li key={i}>
              {item}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Description;