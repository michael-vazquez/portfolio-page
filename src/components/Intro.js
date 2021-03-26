import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import profileImage from "./profile_image.jpg";
import Header from "./Header";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.primary.main,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    margin: "auto",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "500px",
  },
  subtitle: {
    color: theme.palette.primary.light,
    marginBottom: theme.spacing(2),
    // margin: "auto",
    textAlign: "left",
  },
  name: {
    color: theme.palette.primary.dark,
    marginBottom: theme.spacing(1),
    // margin: "auto",
    textAlign: "left",
  },
  caption: {
    color: theme.palette.primary.contrastText,
    marginBottom: theme.spacing(2),
    // margin: "auto",
    textAlign: "left",
  },
  image: {
    borderRadius: "50%",
    height: "150px",
    width: "150px",
  },
}));

function Intro(props) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Header handlePageChange={props.handlePageChange} />
      <div className={classes.row}>
        <div className={classes.column}>
          <Typography variant="h3" className={classes.subtitle}>
            Hey! My name is
          </Typography>
          <Typography variant="h2" className={classes.name}>
            Michael Vazquez
          </Typography>
          <Typography variant="subtitle1" className={classes.caption}>
            I am a full stack software developer based in Puerto Rico with 10+
            years of experience in software development. Have worked in
            enterprise and big scale applications in multiple industries like
            aerospace, healthcare, finance and government.
          </Typography>
          <Typography variant="subtitle1" className={classes.caption}>
            I am passionate about finding creative solutions to every day
            challenges.
          </Typography>
        </div>
        <div className={classes.column}>
          <img className={classes.image} src={profileImage} alt="pic" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Intro;
