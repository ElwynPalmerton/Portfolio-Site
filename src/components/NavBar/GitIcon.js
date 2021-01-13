import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  menuButton: {
    marginRight: theme.spacing(2),
    // fontFamily: 'IBM Plex Mono',
    textDecoration: "none",
    color: "#d5e3f5",
  },
}));

export default function GitIcon() {
  const classes = useStyles();

  return (
    <a
      href="https://github.com/ElwynPalmerton"
      className={classes.menuButton}

    >
      <GitHubIcon
        style={{ fontSize: "45px", marginRight: "20px" }}
        fontSize="inherit"
      />
    </a>
  )
}