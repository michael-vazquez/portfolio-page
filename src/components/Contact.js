import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import contactImage from "./uyuni_image.jpg";
import Footer from "./Footer";
import { ReactComponent as Bonfire } from "./bonfire.svg";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.primary.light,
    backgroundImage: `url(${contactImage})`,
    backgroundSize: "cover",
  },
  center: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    maxWidth: "500px",
  },
  bonfire: {
    height: "40%",
    width: "50%",
    margin: "auto",
    marginBottom: theme.spacing(2),
  },
  title: {
    color: theme.palette.primary.dark,
    marginBottom: theme.spacing(2),
    margin: "auto",
    textAlign: "center",
  },
  button: {
    marginTop: theme.spacing(1),
    width: "50%",
    margin: "auto",
  },
}));

function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.center}>
        <Bonfire className={classes.bonfire} />
        <Typography variant="h3" className={classes.title}>
          Get in touch!
        </Typography>
        <Typography variant="h5" className={classes.title}>
          Have any ideas you want to share, want to work together, or any other
          comment? Feel free to reach out!
        </Typography>
        <Button
          size="medium"
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
          href="mailto:michael.vazquez@upr.edu"
        >
          Say Hello
        </Button>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
