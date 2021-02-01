import React from 'react';
import Header from './NavBar/Header';
import { Grid } from '@material-ui/core';
// import SimpleMediaQuery from './SimpleMediaQuery.js';
import styled from 'styled-components';

const Footer = styled.footer`
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  color: #d5e3f5;
  font-family: 'Nanum Gothic', sans-serif;
  `;


function PageWrapper(props) {
  // console.log(props.word);
  return (
    <div className="page-container">
      {/* <SimpleMediaQuery /> */}
      {/* Contains Header */}

      <Grid container direction="column">
        <Grid item>
          <Header changeDarkMode={props.changeDarkMode}
            darkMode={props.darkMode}
          />
        </Grid>

        <div className="content-wrap"
        >
          {/* Contans stuff  below Headers */}
          <Grid item container>
            {/* Gutter  */}
            <Grid item xs={false} sm={2} />
            {/* Content(Grid container inside content) */}
            <Grid item xs={12} sm={8}>
              <div>
                {props.center}

              </div>
            </Grid>
            {/* Gutter  */}
            <Grid item xs={false} sm={2} />
          </Grid>
        </div>
      </Grid>
      {/* <Footer
        style={{ textAlign: 'center' }}
      >Elwyn Palmerton ©{new Date().getFullYear()}</Footer> */}
    </div>
  );
}

export default PageWrapper;