import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, IconButton, Button } from "@material-ui/core";
import Footer from "./Footer";
import SpringIcon from "./spring-framework.png";
import ReactIcon from "./react.png";
import DockerIcon from "./docker.png";
import LiquibaseIcon from "./liquibase.png";
import SwaggerIcon from "./swagger.png";
import AzureIcon from "./azure.png";
import JunitIcon from "./junit.png";
import MaterialUiIcon from "./material-ui.png";
import SqlServerIcon from "./sql-server.png";
import PostgresIcon from "./postgresql.png";
import MysqlIcon from "./mysql.png";
import SquibbIcon from "./squibb.png";
import PrattIcon from "./pratt-whitney.svg";
import MaxarIcon from "./maxar.png";
import ChurchillIcon from "./churchill.png";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.primary.dark,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    margin: "auto",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "50%",
    marginRight: theme.spacing(20),
  },
  columnRight: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "50%",
  },
  icon: {
    margin: "auto",
    width: "125px",
    height: "125px",
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(0),
    marginLeft: theme.spacing(0),
  },
  companyIcon: {
    margin: "auto",
    width: "200px",
    height: "200px",
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(0),
    marginLeft: theme.spacing(0),
  },
  subIcon: {
    height: "100%",
    width: "100%",
  },
  subtitle: {
    color: theme.palette.primary.light,
    marginBottom: theme.spacing(2),
    textAlign: "left",
  },
  title: {
    color: theme.palette.primary.contrastText,
    marginTop: theme.spacing(8),
    textAlign: "center",
  },
  caption: {
    color: theme.palette.primary.contrastText,
    textAlign: "center",
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(0),
  },
  button: {
    marginTop: theme.spacing(1),
    margin: "auto",
  },
}));

function Experience() {
  const classes = useStyles();

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = `/resume.pdf`;
    link.download = `/resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={classes.container}>
      <Typography variant="h3" className={classes.title}>
        Experience
      </Typography>
      <div className={classes.row}>
        <div className={classes.column}>
          <Typography variant="h5" className={classes.caption}>
            Technologies I have worked with:
          </Typography>
          <div className={classes.row}>
            <IconButton className={classes.icon}>
              <img className={classes.subIcon} src={SpringIcon} alt="pic" />
            </IconButton>
            <IconButton className={classes.icon}>
              <img className={classes.subIcon} src={LiquibaseIcon} alt="pic" />
            </IconButton>
            <IconButton className={classes.icon}>
              <img className={classes.subIcon} src={SwaggerIcon} alt="pic" />
            </IconButton>
            <IconButton className={classes.icon}>
              <img className={classes.subIcon} src={JunitIcon} alt="pic" />
            </IconButton>
          </div>
          <div className={classes.row}>
            <IconButton className={classes.icon}>
              <img className={classes.subIcon} src={ReactIcon} alt="pic" />
            </IconButton>
            <IconButton className={classes.icon}>
              <img className={classes.subIcon} src={MaterialUiIcon} alt="pic" />
            </IconButton>
            <IconButton className={classes.icon}>
              <img className={classes.subIcon} src={DockerIcon} alt="pic" />
            </IconButton>
            <IconButton className={classes.icon}>
              <img className={classes.subIcon} src={AzureIcon} alt="pic" />
            </IconButton>
          </div>

          <div className={classes.row}>
            <IconButton className={classes.icon}>
              <img className={classes.subIcon} src={SqlServerIcon} alt="pic" />
            </IconButton>
            <IconButton className={classes.icon}>
              <img className={classes.subIcon} src={PostgresIcon} alt="pic" />
            </IconButton>
            <IconButton className={classes.icon}>
              <img className={classes.subIcon} src={MysqlIcon} alt="pic" />
            </IconButton>
            <IconButton className={classes.icon}>
              <img className={classes.subIcon} src={MaterialUiIcon} alt="pic" />
            </IconButton>
          </div>
        </div>

        <div className={classes.columnRight}>
          <Typography variant="h5" className={classes.caption}>
            Companies I have worked with:
          </Typography>
          <div className={classes.row}>
            <IconButton className={classes.companyIcon}>
              <img className={classes.subIcon} src={SquibbIcon} alt="pic" />
            </IconButton>
            <IconButton className={classes.companyIcon}>
              <img className={classes.subIcon} src={PrattIcon} alt="pic" />
            </IconButton>
          </div>

          <div className={classes.row}>
            <IconButton className={classes.companyIcon}>
              <img className={classes.subIcon} src={MaxarIcon} alt="pic" />
            </IconButton>
            <IconButton className={classes.companyIcon}>
              <img className={classes.subIcon} src={ChurchillIcon} alt="pic" />
            </IconButton>
          </div>
        </div>
      </div>
      <Button
        size="medium"
        type="submit"
        variant="contained"
        // color="dark"
        className={classes.button}
        // href="/resume.pdf"
        onClick={() => downloadResume()}
      >
        Download Resume
      </Button>
      <Footer />
    </div>
  );
}

export default Experience;
