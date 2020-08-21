import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "@material-ui/core/Container";
import CardContent from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const styles = {
  ButtonsStyle: {
    background: "#ffc107",
    marginTop: 45,
    marginBottom: 10,
    marginLeft: 50
  },
  Card: {
    backgroundColor: fade("#D2D6D6", 0.5),
  },
  CardContent: {
    paddingLeft: 20,
    paddingTop: 10,
  },
  Typography: {
    textAlign: "center"
  },
  Button: {
    color: "blue"
  }
};

const Login = () => {
  return (
    <Container maxWidth="sm">
      <Card style={styles.Card} >
        <CardContent style={styles.CardContent}>
          <form action="/login" method="post">
          <Typography>Email:</Typography>
          <TextField type="text" name="username" />
          <Typography>Password:</Typography>
          <TextField type="password" name="password" />
          <Button
            size="large"
            type="submit"
            value="login"
            style={styles.ButtonsStyle}
          >
            Login
          </Button>
          <Typography style={styles.Typography}>
            Don't have an account? Sign up<Button href="/Signup" style={styles.Button}>Here</Button>
          </Typography>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Login;
