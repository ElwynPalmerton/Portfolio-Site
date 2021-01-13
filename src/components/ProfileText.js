import React from 'react';
import styled from 'styled-components';

const text = [
  "Hi! My name is Elwyn and I’ve been a web developer for the past year and half. ",
  "Before that I worked as a bookkeeper and accountant for about the past ten years. I also have an MFA and a background in drawing and painting and I have exhibited my work in New York, LA, and Oakland.",
  "Web development is an exciting field for me. It allows me to bring together my visual and analytical skills. In addition to knowledge of web development I bring years of thinking about visual problems and experience in fast-paced corporate  environments.", "As a full-stack developer I am interested in all aspects of web development and enjoy solving all types of problems. I especially enjoy giving my apps a beautiful UI, creating React components, and building backend API’s in Node.js."]



export default function ProfileText() {


  return (
    <div>
      {text.map(para => {
        return (<div>

          <p>{para}</p>
        </div>)
      })}
    </div>
  )
}