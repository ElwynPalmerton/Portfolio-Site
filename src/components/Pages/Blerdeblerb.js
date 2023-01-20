import React from "react";
import Description from "./Description";
import PageWrapper from "../PageWrapper";
import RouterIcon from "../../assets/react-router.256x140.png";
import NodeIcon from "../../assets/nodejs.png";
import Express from "../../assets/express.png";
import s3 from "../../assets/s3.png";
import eb from "../../assets/eb.png";
import codepipeline from "../../assets/codepipeline.png";
import { Grid } from "@material-ui/core";

const text = {
  name: "BLERDEBLURB🗯",
  font: "blerbFont",
  url: "https://blerdeblurb.com/#!/index.html/signup",
  imgUrl: "https://i.ibb.co/LRcL8Fn/Blerdeblerb-screenshot.png",
  description: " Blerdeblerb is a Twitter-clone.",
  tech: [
    "React with Redux and React Router",
    "Node.js and Express",
    "MongoDB and Mongoose",
    "Axios for data fetching",
    "Material-UI",
    "JSON web tokens",
    "Multer and Sharp for image uploading.",
    "Node.js backend deployed on AWS with Elastic Beanstalk, Route 53, and ACM.",
    "React frontend deployed on S3.",
    "CI/CD with CodeCommit, CodePipeline, and CodeBuild.",
  ],
  features: [
    "Twitter-like functionality",
    "Post blerbs to your feed.",
    "Follow your friends' blerbs",
    "LIKE and REBLERB your friends' blerbs",
    "Customize your profile with a user image and bio",
  ],
};

function Blerdeblerb() {
  return (
    <PageWrapper>
      <Description text={text} />
      <br />
      <br />
      <br />
      <Grid container direction="row" justify="center" spacing={8}>
        <Grid style={{ background: "white" }} item>
          <img style={{ height: "80px" }} src={NodeIcon} />
        </Grid>
        <Grid item>
          <img style={{ height: "80px" }} src={RouterIcon} />
        </Grid>

        <Grid style={{ background: "white" }} item>
          <img style={{ height: "80px" }} src={Express} />
        </Grid>
        <Grid item>
          <img style={{ height: "80px" }} src={s3} />
        </Grid>
        <Grid item>
          <img style={{ height: "80px" }} src={eb} />
        </Grid>
        <Grid item>
          <img style={{ height: "80px" }} src={codepipeline} />
        </Grid>
      </Grid>
    </PageWrapper>
  );
}

export default Blerdeblerb;
