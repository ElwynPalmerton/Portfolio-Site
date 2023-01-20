import React from "react";
import { Grid } from "@material-ui/core";
import styled from "styled-components";

const TitleBox = styled.div`
  border: ${(props) => `2px solid ${props.theme.color.border}`};
  color: #d5e3f5;
  padding: 2rem;
  border-radius: 2rem;
`;

const headerStyle = { fontSize: "2rem", fontFamily: "Space Mono" };
const itemStyle = { fontSize: "1.25rem", fontFamily: "Space Mono" };

export default function TechSection() {
  return (
    <>
      <br />

      <Grid container direction="row" justify="center" spacing={8}>
        <Grid item>
          <h1 style={headerStyle}>✨🪐✨</h1>
        </Grid>
      </Grid>
      <br />
      <br />
      <br />
      <br />
      <TitleBox style={headerStyle}>
        <Grid container direction="row" spacing={2}>
          <Grid item sm={2}>
            Tech🛠️:
          </Grid>
        </Grid>
        <Grid style={itemStyle} container direction="row">
          <Grid item sm={2}></Grid>
          <Grid item sm={3}>
            🎨 Frontend:
          </Grid>
          <Grid item sm={5}>
            React
          </Grid>
        </Grid>
        <Grid style={itemStyle} container direction="row">
          <Grid item sm={2}></Grid>
          <Grid item sm={3}>
            ⚙️ Backend:
          </Grid>
          <Grid item sm={5}>
            Node.js and .NET Core
          </Grid>
        </Grid>
        <Grid style={itemStyle} container direction="row">
          <Grid item sm={2}></Grid>
          <Grid item sm={3}>
            ☁️ DevOps:
          </Grid>
          <Grid item sm={5}>
            AWS Certified Developer (DVA-Co1)
          </Grid>
        </Grid>
        <Grid style={itemStyle} container direction="row">
          <Grid item sm={2}></Grid>
          <Grid item sm={3}>
            ✨ Animations:
          </Grid>
          <Grid item sm={5}>
            P5.js
          </Grid>
        </Grid>
      </TitleBox>
    </>
  );
}
