import React from 'react';

const text = [
  "Hi, my name is Elwyn and I am a full stack web developer.",
  "Before that I worked as a bookkeeper and a junior accountant. I also have a background in fine art. My drawings, paintings, and sculptures have been exhibited in New York, Oakland, and Los Angeles.",

  "Web development is an exciting field for me. It allows me to bring together my visual and analytical skills. In addition to this I bring years of experience in fast-paced corporate  environments.",

  "One exciting discovery for me, since learning programming, is creative coding. In my portfolio you can see some of my projects. I like making animations and seeing colorful things move around the screen. With a little bit of code and imagination you can make some cool stuff happen, like this glimmering backdrop of stars, right behind me.",

  "As a full-stack developer, I am also interested in all aspects of web development. I enjoy solving problems. I especially like giving my apps a beautiful UI, creating React components, and building API’s in Node.js. I hope that you will look at my portfolio projects on this site and check out my Github.", "Mostly, I like writing code that works."]


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