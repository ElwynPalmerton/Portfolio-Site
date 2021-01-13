
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    textDecoration: "none",
    color: "#d5e3f5",
  },
  link: {
    textDecoration: "none",
    color: "#d5e3f5",
  },
}));

export default function SimpleMenu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (<div>
    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      <MenuIcon
        className={classes.link}
      />
    </Button>
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}><Link
        className={classes.link}
        to={{
          pathname: "/portfolio",
        }}
      >
        Portfolio
      </Link></MenuItem>
      <MenuItem onClick={handleClose}><Link
        className={classes.link}
        to={{
          pathname: "/cv",
        }}
      >CV
      </Link></MenuItem>
      {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
    </Menu>
  </div>)



}