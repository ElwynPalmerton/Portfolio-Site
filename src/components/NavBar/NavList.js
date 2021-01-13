import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    // fontFamily: 'IBM Plex Mono',
    textDecoration: "none",
    color: "#d5e3f5",
  },
  link: {
    textDecoration: "none",
  },
}));

export default function NavList() {



  const classes = useStyles();

  return (<div>
    <Link
      className={classes.link}
      to={{
        pathname: "/portfolio",
      }}
    >
      <Button
        className={classes.menuButton}
      >
        Portfolio
      </Button>
    </Link>

    <Link
      className={classes.link}
      to={{
        pathname: "/cv",
      }}
    >
      <Button
        className={classes.menuButton}
      >
        CV
      </Button>
    </Link>

  </div>)
}