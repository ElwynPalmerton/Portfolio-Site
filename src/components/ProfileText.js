import React from "react";

const text = [
  "Hello, my name is Elwyn and I'm a web developer. Welcome to my site.",
  "This portfolio includes a projects that I have completed since I began learning web-developer in 2019. These include projects made with JavaScript, React, Node.js, Angular, MongoDB, SQL, and a wide range of other technologies. Some of these projects were deployed with AWS services. I recently completed the AWS Developer Associate certification.",
  "I love the field of web-development. It gives one a unique opportunity to learn and grow everyday: to engage in creative problem solving. No matter how much you know there are always new problems to solve and the opportunity to learn something new. There are challenges. Meeting those challenges requires a mix of grit, determination, patience, and a kind of hard-won intuition: the clarity of mind and problem-solving acumen of someone who solves technical problems every day.",
  "I also love teamwork. Communication is how we grow and share our enthusiasm. Every programmer knows how to learn practice, research, and reading documentation. That’s how you get good. But Communication and teamwork is how you become a great developer. Your peers are the ones that tell you what you did not know you needed to know. They answer the questions that you did not think to ask yet. Web development, in this day and age, is a collaborative effort. More than anything, I want to be part of a healthy functional team that loves the work they do and builds great applications: things which improve people’s lives.",
  "I love writing code that works: the eureka moment that programmers live for. But I also believe in the long view. Follow best practices, make sure things are stable, and keep an eye on your tech debt. Keep tabs on the loose ends and come back to them. Web development is a process, not just a product.",
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
