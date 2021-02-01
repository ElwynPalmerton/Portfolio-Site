import React from 'react';

const text = [
  "I’ve been a web developer for the past year and half. ",
  "Before that I worked as a bookkeeper and accountant. I also have a background in fine art. My drawings, paintings, and sculptures have been exhibited in New York, Oakland, and LA.",
  "Web development is an exciting field for me. It allows me to bring together my visual and analytical skills. In addition to this I bring years of experience in fast-paced corporate  environments.", "One exciting aspect of learning programming, for me, is creative coding. In my portfolio you can see some of my projets. I like making animations and seeing colorful things move around the screen as products of nothing more than code and a little imagination.", "As a full-stack developer, I am interested in all aspects of web development and enjoy solving all types of problems. I especially like giving my apps a beautiful UI, creating React components, and building backend API’s in Node.js.", "Mostly, I like writing code that works."]



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