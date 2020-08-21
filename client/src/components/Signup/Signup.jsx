import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import Container from "@material-ui/core/Container";
import CardContent from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const styles = {
  ButtonsStyle: {
    background: "#ffc107",
    marginTop: 45,
    marginLeft: 30,
    marginBottom: 10,
  },
  Card: {
    backgroundColor: fade("#D2D6D6", 0.5),
  },
  CardContent: {
    paddingLeft: 20,
    paddingTop: 10,
  },
};

const Signup = () => {
  return (
    <Container maxWidth="sm">
      <Card style={styles.Card}>
        <CardContent style={styles.CardContent}>
        <form  action="/signup" method="post" >

          <Typography>Email:</Typography>
          <TextField type="text" name="username" />
          <Typography>Password:</Typography>
          <TextField type="password" name="password" />
          <Typography>Confirm Password:</Typography>
          <TextField type="password" name="confirmPassword" />
          <Button className="Signup" type="submit" value="signup" size="large" style={styles.ButtonsStyle}>
            Sign Up
          </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Signup;
