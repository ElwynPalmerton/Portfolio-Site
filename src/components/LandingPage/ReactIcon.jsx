import React from "react";
import { Grid } from "@material-ui/core";
import { ReactComponent as ReactSVG } from "../../assets/react-1.svg";

export default function ReactIcon() {
  const svgStyle = {
    width: "100px",
    height: "100px",
  };

  const wideSVGStyle = {
    width: "200px",
    height: "100px",
  };

  return <img src="../../assets/react-1.svg" style={{ svgStyle }} />;
}
