import React from "react";
import Description from "./Description";
import PageWrapper from "./PageWrapper";

const text = {
  name: "Closest Pair",
  font: "walker",
  url: "https://elwynpalmerton.github.io/ClosestPair/",
  imgUrl: "https://i.ibb.co/Np13Mw5/Closest-Pair.png",
  description: "Randomly generates 50 points and finds the closest pair.",
  tech: ["p5.js", "Javascript"],
  features: [
    "Visual representation of the closest pair algorithm.",
    "Uses p5.js for rendering.",
  ],
};

function ClosestPair() {
  return (
    <PageWrapper>
      <Description text={text} />
    </PageWrapper>
  );
}

export default ClosestPair;
