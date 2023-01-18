import React from "react";

const text = [
  "Hello, my name is Elwyn and I'm a web developer. Welcome to my site.",
  "This portfolio site includes a sampling of projects that I have completed since I began learning web-developer in 2019. These include projects made with JavaScript, React, Node.js, Angular, MongoDB, SQL, and a wide range of other technologies.",
  "Some of these projects were deployed with AWS services. I recently completed the AWS Developer Associate certification.",
  "As you can see from the background, behind me, I am also interested in creative coding and algorithmic art. Some examples of these projects are also included here.",
  "I love the field of web-development. It gives one a unique opportunity to learn and grow everyday: to engage in creative problem solving. Meeting those challenges requires a mix of grit, determination, and patience. The reward is a sense that one can grow in this field and achieve new things every day.",
  "I also love teamwork. Communication is how we grow and share our enthusiasm. Every programmer knows how to learn through practice - but communication and teamwork is how you find out what you need to know. And get better faster.",
  "Web development is a collaborative effort. More than anything, I want to be part of a healthy functional team that loves the work they do and builds great applications: things which improve people’s lives.",
  "I love writing code that works: the eureka moment that programmers live for. But I also believe in the long view. Follow best practices and keep tabs on tech debt and loose ends. Nothing is ever truly finished. Web development is a process, not just a product.",
  "I hope that you will check out these projects and enjoy what they have to offer. Thank you for visiting my site!",
  "Sincerely,",
  "Elwyn",
];

export default function ProfileText() {
  return (
    <div class="provide">
      {text.map((para, i) => {
        return (
          <div key={i}>
            <p>{para}</p>
          </div>
        );
      })}
    </div>
  );
}
