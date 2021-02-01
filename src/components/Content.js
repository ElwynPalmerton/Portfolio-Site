import React from 'react';
import JunkCard from '../components/JunkCard';
import { Grid } from '@material-ui/core';
import constants, { constants2, constants3 } from '../constants.js'
import PageWrapper from './PageWrapper';


function Content(props) {


  return (
    <PageWrapper center={
      <div style={{ marginBottom: "100px" }}>
        <h2
          className="sample"
        >Full-Stack Web Apps</h2>
        <Grid
          style={{ marginTop: "30px" }}
          container spacing={10}>

          {constants.map((content, i) => {
            return <Grid key={i} item xs={12} sm={6}>
              <JunkCard


                product={content} />
            </Grid>
          })}
        </Grid>

        <h2
          style={{ marginTop: "60px" }}
          className="sample"
        >Animations</h2>
        <Grid
          alignItems="stretch"
          style={{ marginTop: "30px" }}
          container spacing={10}>

          {constants2.map((content, i) => {
            return <Grid key={i} item xs={12} sm={6}>
              <JunkCard


                product={content} />
            </Grid>
          })}
        </Grid>

        <h2
          style={{ marginTop: "60px" }}
          className="sample"
        >Algorithms</h2>
        <Grid
          style={{ marginTop: "30px" }}
          container spacing={10}>

          {constants3.map((content, i) => {
            return <Grid key={i} item xs={12} sm={6}>
              <JunkCard


                product={content} />
            </Grid>
          })}
        </Grid>

      </div>
    } />
  )
}

export default Content;