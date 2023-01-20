import React from "react";
import { Grid } from "@material-ui/core";
import ReactIcon from "./ReactIcon.jsx";
import { ReactComponent as ReactSVG } from "../../assets/react-1.svg";
import { ReactComponent as ReduxSvg } from "../../assets/redux.svg";
import { ReactComponent as TypeScript } from "../../assets/Typescript_logo_2020.svg";
import { ReactComponent as NET } from "../../assets/NET.svg";
import AWS from "../../assets/AWS_Cloud.png";

export default function IconSection() {
  const svgStyle = {
    width: "100px",
    height: "100px",
    scoped: true,
  };

  const wideSVGStyle = {
    width: "200px",
    height: "100px",
    marginLeft: "25px",
  };

  const awsWideSVGStyle = {
    width: "150",
    height: "100px",
    // marginLeft: "25px",
  };

  return (
    <Grid container direction="row" justify="center" spacing={8}>
      <Grid item>
        <ReactSVG style={svgStyle} />
      </Grid>
      <Grid item>
        <ReduxSvg style={svgStyle} />
      </Grid>
      <Grid item>
        <TypeScript style={svgStyle} />
      </Grid>
      <Grid item>
        <img style={awsWideSVGStyle} src={AWS} />
      </Grid>
      <Grid item>
        <NET style={svgStyle} />
      </Grid>
    </Grid>
  );
}
