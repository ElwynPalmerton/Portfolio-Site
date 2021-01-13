import React from 'react';
import Header from './NavBar/Header';
import { Grid, Button, Typography } from '@material-ui/core';
// import SimpleMediaQuery from './SimpleMediaQuery.js';
import Content from './Content';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CV from './CV';
import Zybriqs from './Zybriqs';
import Blerdeblerb from './Blerdeblerb';
import Zorbitals from './Zorbitals';
import Walker from './Walker';
import AVL from './AVL';
import LandingPage from './LandingPage';
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


function Layout(props) {
  // console.log(props.word);
  return (
    <div className="page-container">
      {/* <SimpleMediaQuery /> */}
      {/* Contains Header */}
      <Router>
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
              <Grid item sx={12} sm={8}>

                <div>
                  <Switch>
                    <Route exact path="/">
                      <LandingPage />
                    </Route>
                    <Route exact path="/portfolio">
                      <Content />
                    </Route>
                    <Route path="/cv">
                      <CV />
                    </Route>
                    <Route path="/Zybriqs">
                      <Zybriqs />
                    </Route><Route path="/Blerdeblerb">
                      <Blerdeblerb />
                    </Route>
                    <Route path="/zorbitals">
                      <Zorbitals />
                    </Route>
                    <Route path="/walker">
                      <Walker />
                    </Route>
                    <Route path="/avl">
                      <AVL />
                    </Route>
                  </Switch>
                </div>


              </Grid>
              {/* Gutter  */}
              <Grid item xs={false} sm={2} />
            </Grid>
          </div>
        </Grid>
      </Router>

      <Footer
        style={{ textAlign: 'center' }}
      >Elwyn Palmerton ©{new Date().getFullYear()}</Footer>
    </div>
  );
}

export default Layout;