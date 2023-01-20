import React from "react";

function Description(props) {
  return (
    <div>
      <a href={props.text.url} style={{ textDecoration: "none" }}>
        <h1 className={props.text.font}>{props.text.name}</h1>
      </a>
      <h3 style={{ fontFamily: "Space Mono" }}>{props.text.description}</h3>
      <img
        style={{
          width: "400px",
          border: "solid #222222 2px",
          borderRadius: "0px",
          marginTop: "1rem",
        }}
        src={props.text.imgUrl}
      ></img>
      <h2 className="sample">Built with: </h2>
      <ul className="sampleText">
        {props.text.tech.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
      <h2 className="sample">Features: </h2>
      <ul className="sampleText">
        {props.text.features.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default Description;
