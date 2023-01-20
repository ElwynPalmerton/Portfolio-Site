import React from "react";

const text = [
  "My name is Elwyn and I'm a web developer. Welcome to my site.",
  "This portfolio site includes a selection of projects that I have completed since I began learning web-development in 2019.",
  "I hope that you will enjoy visiting these sites as much as I enjoyed making them.",
  "Sincerely,",
  "Elwyn",
];

export default function ProfileText() {
  return (
    <div className="profile">
      <h1 style={{ fontFamily: "Space Mono" }}> Hello! </h1>
      {text.map((para, i) => {
        return (
          <div key={i}>
            <p style={{ fontFamily: "Space Mono" }}>{para}</p>
          </div>
        );
      })}
    </div>
  );
}
