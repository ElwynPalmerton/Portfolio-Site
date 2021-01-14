import React from 'react';

const text = [
  "Hi! My name is Elwyn and I’ve been a web developer for the past year and half. ",
  "Before that I worked as a bookkeeper and accountant for almost a decade. I also have an MFA and a background in fine art. My drawings, paintings, and sculptures have been exhibited in New York, Austin, LA, and Oakland.",
  "Web development is an exciting field for me. It allows me to bring together my visual and analytical skills. In addition to this I bring years of experience in fast-paced corporate  environments.", "As a full-stack developer, I am interested in all aspects of web development and enjoy solving all types of problems. I especially enjoy giving my apps a beautiful UI, creating React components, and building backend API’s in Node.js.", "Mostly, I like writing code that works."]



export default function ProfileText() {


  return (
    <div>
      {text.map((para, i) => {

        return (<div key={i}>
          <p
          >{para}</p>
        </div>)
      })}
    </div>
  )
}