import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  pillButton: {
    // flexGrow: 1,
    color: "#d5e3f5",
  },
}));

const Text = styled.div`
  grid-column-start: 1;
  grid-column-end: 5;
  color: ${(props) => `${props.theme.color.lightGrey}`};
  font-size: 1.2rem;
  margin-bottom: 50px;
  @media (max-width: 600px) {
    grid-row-start: 3;
  }
`;

export default function Buttons() {
  const classes = useStyles();
  return (
    <Text>
      <Link
        // className={classes.link}
        to={{
          pathname: "/portfolio",
        }}
      >
        <Button
          className={classes.pillButton}
          style={{
            borderRadius: "50px",
            width: "150px",
            marginRight: "10px",
          }}
          variant="outlined"
        >
          View Portfolio
        </Button>
      </Link>

      <Link
        to={{
          pathname: "/cv",
        }}
      >
        <Button
          className={classes.pillButton}
          style={{
            borderRadius: "50px",
            width: "50px",
          }}
          variant="outlined"
        >
          CV
        </Button>
      </Link>
    </Text>
  );
}
