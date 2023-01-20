import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import Share from "@material-ui/icons/Share";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#222222",
    borderRadius: "0px",
    color: "#dddddd",
    textDecoration: "None",
    height: "100%",
    display: "grid",
    gridTemplateRows: "1fr auto",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  button: {
    fontFamily: "Space Mono",
    color: "#dddddd",
    "&:hover": {
      color: " #7AB8B0",
    },
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  avatar: {
    backgroundColor: red[500],
  },
  media: {
    // height: 0,
    paddingTop: "56.25%", // 16:9
  },
});

function JunkCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  // title, prices, description, avatarUrl, imageUrl
  const key = props;
  const { title, link, route, fontType, description, imgSrc, imageUrl } =
    props.product;

  return (
    <Card className={classes.root}>
      <div>
        <CardHeader
          style={{ textAlign: "center" }}
          disableTypography="true"
          className="walker"
          title={title}
        />
        {/* Card media  */}
        <CardMedia
          // style={{ height: "300px" }}
          className={classes.media}
          image={imageUrl}
        />
        <CardContent style={{ fontFamily: "Space Mono" }}>
          {" "}
          {description}{" "}
        </CardContent>
      </div>
      <div>
        <CardActions>
          <Link
            className={classes.link}
            style={{ textDecoration: "none" }}
            to={{
              pathname: `/${route}`,
            }}
          >
            <Button className={classes.button} size="small">
              Learn More
            </Button>
          </Link>
          <a href={link} style={{ textDecoration: "none" }}>
            <Button className={classes.button} size="small">
              View site
            </Button>
          </a>
        </CardActions>
      </div>
    </Card>
  );
}

export default JunkCard;
