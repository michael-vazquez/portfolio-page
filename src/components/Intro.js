import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Typography, useMediaQuery } from "@material-ui/core";
import profileImage from "./profile_image.jpg";
import Header from "./Header";
import Footer from "./Footer";

const useStyles = (smallMedia) =>
  makeStyles((theme) => ({
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
      textAlign: "left",
      fontSize: smallMedia ? "2rem" : "",
      marginLeft: smallMedia ? theme.spacing(1) : "",
    },
    name: {
      color: theme.palette.primary.dark,
      marginBottom: smallMedia ? theme.spacing(2) : theme.spacing(1),
      textAlign: "left",
      fontSize: smallMedia ? "2.80rem" : "",
      marginLeft: smallMedia ? theme.spacing(1) : "",
    },
    caption: {
      color: theme.palette.primary.contrastText,
      marginBottom: theme.spacing(2),
      textAlign: "left",
      marginLeft: smallMedia ? theme.spacing(1) : "",
    },
    image: {
      borderRadius: "50%",
      height: "150px",
      width: "150px",
    },
  }));

function Intro(props) {
  const theme = useTheme();
  const smallMedia = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = useStyles(smallMedia)();

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
        {!smallMedia ? (
          <div className={classes.column}>
            <img className={classes.image} src={profileImage} alt="pic" />
          </div>
        ) : null}
      </div>
      {!smallMedia ? <Footer /> : null}
    </div>
  );
}

export default Intro;
