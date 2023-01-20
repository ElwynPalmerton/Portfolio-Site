import React from "react";
import Description from "./Description";
import PageWrapper from "../PageWrapper";
import { Grid } from "@material-ui/core";

import NodeIcon from "../../assets/nodejs.png";
import Express from "../../assets/express.png";
import eb from "../../assets/eb.png";
import p5 from "../../assets/p5.png";
import codepipeline from "../../assets/codepipeline.png";

const text = {
  name: "Zybriqs",
  font: "zybriqsTitle",
  url: "http://www.zybriqs.com",
  imgUrl: "https://i.ibb.co/ZYDyNnC/Screen-Shot-2020-12-04-at-3-26-08-PM.png",
  description: " Zybriqs is an interactive ball and block animation.",
  tech: [
    "p5.js",
    "Javascript",
    "Node.js and Express",
    "Express Sessions",
    "Passport.js",
    "MongoDB and Mongoose",
    "EJS",
    "BootStrap",
    "Deployed on AWS with Elastic Beanstalk.",
    "CI/CD with CodeCommit, CodePipeline, and CodeBuild.",
  ],
  features: [
    "A unique interactive animation which models gravity, wind, acceleration, and drag.",
    "Register and login to create and save your own Zybriqs arrangements.",
    "Change the HSLA colors of individual elements",
    "Draw blocks, accelerators, and drag areas on the Zybriqs canvas.",
    "Activate several preset arrangements",
    "Play God by changing the strength and direction of gravitational force.",
  ],
};

function Zybriqs() {
  return (
    <>
      <PageWrapper>
        <Description text={text} />
        <br />
        <br />
        <br />
        <Grid container direction="row" justify="center" spacing={4}>
          <Grid style={{ marginRight: "1rem", background: "white" }} item>
            <img style={{ height: "80px" }} src={NodeIcon} />
          </Grid>
          <Grid style={{ background: "white" }} item>
            <img style={{ height: "80px" }} src={Express} />
          </Grid>
        </Grid>
        <br />
        <Grid container direction="row" justify="center" spacing={4}>
          <Grid item>
            <img style={{ height: "100px" }} src={p5} />
          </Grid>
          <Grid item>
            <img style={{ height: "100px" }} src={eb} />
          </Grid>
          <Grid item>
            <img style={{ height: "100px" }} src={codepipeline} />
          </Grid>
        </Grid>
      </PageWrapper>
    </>
  );
}

export default Zybriqs;
