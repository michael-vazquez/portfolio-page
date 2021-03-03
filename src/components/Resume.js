import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  panel: {
    backgroundColor: theme.palette.secondary.main,
    position: "relative",
    height: "100%",
  },
}));

function Resume() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.panel}>
        <h2>Second Component</h2>{" "}
      </div>
    </div>
  );
}

export default Resume;
