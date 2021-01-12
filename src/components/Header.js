import React from 'react';
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "30px",
    backgroundColor: "#dddddd"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    fontFamily: 'IBM Plex Mono',
    textDecoration: "none",
    color: "#aaaaaa",
  },
  link: {
    textDecoration: "none",
  },
  title: {
    marginLeft: "75px",
    flexGrow: 1,
    textAlign: "center",
    color: "#ffffff",
    textDecoration: "none"

  },
  navbar: {
    backgroundColor: "#1c1c1c",
    fontFamily: 'Nanum Gothic',
  },
  gridElt: {
    width: "90px"
  }
}));

export default function Header(props) {
  const classes = useStyles();

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

          <Link
            className={classes.link}
            to={{
              pathname: "/cv",
            }}
          >
            <Button
              className={classes.menuButton}
            ><h2
            >CV </h2>
            </Button>
          </Link>
          <a
            href="https://github.com/ElwynPalmerton"
            style={{
              color: "#aaaaaa"
            }}
          >
            <GitHubIcon
            />
          </a>



        </Toolbar>
      </AppBar>
    </div>
  );
}

// changeDarkMode={changeDarkMode}
            // darkMode={darkMode}