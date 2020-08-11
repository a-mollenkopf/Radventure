import React from "react";
import { Link } from "react-router-dom";
import Map from "../components/Map/Map";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Navigation";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justify: "center",
    "& > *": {
      margin: theme.spacing(2, "auto"),
      width: theme.spacing(145),
      height: theme.spacing(70, "auto"),
    },
  },
}));

const Search = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        {" "}
        <Map />{" "}
        <Fab
          variant="extended"
          size="medium"
          color="primary"
          aria-label="add"
          className={classes.margin}
        >
          <NavigationIcon />
          Save Search
        </Fab>
      </Paper>
    </div>
  );
};

export default Search;
