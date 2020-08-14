import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    // maxWidth: 1200,
    // marginLeft: 400,
    // marginTop: 20,
    // backgroundColor: fade("#255D42", 0.8),
    // height: 800,
    // overflow: "auto",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 70,
  },
  pos: {
    marginBottom: 12,
  },
});

const styles = {
  ButtonsStyle: {
    background: "#02361C",
    color: "white",
    justifyContent: "center",
    marginTop: 45,
    marginLeft: 500
  },
  img: {
    height: 550,
    marginLeft: 270,
    paddingTop: 20
  },
  Typography: {
    fontSize: 80,
    marginLeft: 150,
    fontWeight: "bold",
    color: "white"
  }
};

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <img src="https://i.imgur.com/AewRuxP.png" style={styles.img}></img>
      <Typography style={styles.Typography}>Welcome to Radventure!</Typography>
      <Button size="large" href="/search" style={styles.ButtonsStyle}>
        Get started
      </Button>
    </Card>
  );
}
