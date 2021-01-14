import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Switch from '@material-ui/core/Switch';
import { Link } from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';
import Grid from '@material-ui/core/Grid';
import NavList from './NavList'
import throttle from 'lodash/throttle';
import GitIcon from './GitIcon';
import NavMenu from './NavMenu';


const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: "18px",
    marginBottom: "30px",
    backgroundColor: "#dddddd",
    '&:hover': {
      color: ' #7AB8B0'
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    // fontFamily: 'IBM Plex Mono',
    textDecoration: "none",
    color: "#d5e3f5",
  },
  link: {
    textDecoration: "none",

  },
  title: {
    marginLeft: "200px",
    fontSize: "30px",
    flexGrow: 1,
    textAlign: "center",
    color: "#d5e3f5",
    textDecoration: "none",


  },
  navbar: {
    backgroundColor: "#1c1c1c",
    fontFamily: 'Nanum Gothic'
  },
  gridElt: {
    width: "90px"
  }
}));

export default function Header(props) {

  const [navStyle, setNavStyle] = useState(true);

  const classes = useStyles();

  useEffect(() => {

    const breakpoint = 800;

    setNavStyle(window.innerWidth > breakpoint);


    const calcInnerWidth = throttle(function () {

      setNavStyle(window.innerWidth > breakpoint);

      return () => window.removeEventListener('resize', calcInnerWidth)

    }, 200)



    window.addEventListener('resize', calcInnerWidth);
  }, [])


  return (
    <div className={classes.root}>
      <AppBar
        className="container"
        position="static">
        <Toolbar
          className={classes.navbar}
        >
          <Link
            className={classes.title}
            to={{
              pathname: "/",
            }}
          >
            <h1 className="navTitle"
            >
              Elwyn Palmerton
            </h1>

          </Link>
          {navStyle ? (
            <React.Fragment>
              <NavList />
              <GitIcon />
            </React.Fragment>
          ) : (
              <NavMenu />
            )
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}