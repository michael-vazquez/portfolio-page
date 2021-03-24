import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, IconButton } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";

const useStyles = makeStyles((theme) => ({
  footer: {
    alignSelf: "end",
    width: "100%",
  },
  center: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    margin: "auto",
  },
  title: {
    color: theme.palette.primary.contrastText,
    marginBottom: theme.spacing(2),
    textAlign: "center",
  },
  icon: {
    marginBottom: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  lastIcon: {
    marginBottom: theme.spacing(2),
  },
}));

function Footer() {
  const classes = useStyles();

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className={classes.footer}>
      <div className={classes.center}>
        <div className={classes.row}>
          <IconButton
            className={classes.icon}
            onClick={() =>
              openInNewTab("https://www.linkedin.com/in/michaeljvp/")
            }
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
          <IconButton
            className={classes.icon}
            onClick={() => openInNewTab("https://github.com/michael-vazquez")}
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
          <IconButton
            className={classes.icon}
            onClick={() => openInNewTab("https://www.instagram.com/michaeljvp")}
          >
            <InstagramIcon fontSize="large" />
          </IconButton>
        </div>
        <Typography variant="caption" className={classes.title}>
          © Built by Michael Vazquez Perez
        </Typography>
      </div>
    </div>
  );
}

export default Footer;
