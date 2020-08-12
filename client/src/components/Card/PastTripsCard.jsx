import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import PastTrip from "../PastTrip/PastTrip";
import "../Card/Card.css";
import { fade } from '@material-ui/core/styles/colorManipulator';

const useStyles = makeStyles({
  root: {
    maxWidth: 1500,
    marginLeft: 200,
    marginTop: 20,
    backgroundColor: fade("#255D42", 0.8),
    height: 600,
    overflow: "auto"
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
    marginTop: 400,
  },
};

export default function SimpleCard() {
  const classes = useStyles();

  return (
    
    <Card className={classes.root}>
      <PastTrip />
    </Card>
  );
}