import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles({
  root: {
    marginTop: "20%",
    backgroundColor: "transparent",
    boxShadow: "none",
    textAlign: "center",
  },
});

const styles = {
  ButtonsStyle: {
    background: "#ffc107",
    marginTop: "45px",
    marginLeft: '25px',
    marginRight: 'auto',
  },
  img: {
    height: "100%",
    width: "100%",
  },
};

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Card className={classes.root}>
        <img
          src="https://i.imgur.com/AewRuxP.png"
          style={styles.img}
        ></img>
        <CardContent className={classes.root}>
          <Button
            size="large"
            href="/search"
            style={styles.ButtonsStyle}
          >
            Get started without Account
          </Button>
          <Button
            size="large"
            href="/login"
            style={styles.ButtonsStyle}
          >
            Get started with Account
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}

