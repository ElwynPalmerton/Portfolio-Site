import React from "react";
import Description from "./Description";
import PageWrapper from "../PageWrapper";

const text = {
  name: "Trampoline",
  font: "walker",
  url: "https://elwynpalmerton.github.io/toxiclibs/",
  imgUrl: "https://i.ibb.co/mJDYfjh/Screen-Shot-2021-02-15-at-3-05-26-PM.png",
  description: "A p5 animation using toxiclibs",
  tech: ["p5.js", "Javascript", "Toxiclibs"],
  features: [
    "Uses toxiclibs a physics library for modeling spring and attraction forces.",
    "Uses p5.js for rendering.",
  ],
};

function Walker() {
  return (
    <PageWrapper>
      <Description text={text} />
    </PageWrapper>
  );
}

export default Walker;
