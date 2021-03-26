import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, IconButton } from "@material-ui/core";
import Header from "./Header";
import Footer from "./Footer";
import WebIcon from "@material-ui/icons/Web";
import StorageIcon from "@material-ui/icons/Storage";
import ComputerIcon from "@material-ui/icons/Computer";
import AssessmentIcon from "@material-ui/icons/Assessment";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.secondary.main,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    margin: "auto",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "400px",
    marginRight: theme.spacing(6),
  },
  columnRight: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "400px",
  },
  icon: {
    margin: "auto",
    width: "150px",
    height: "150px",
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(0),
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
  },
}));

function Resume(props) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Header handlePageChange={props.handlePageChange} />
      <Typography variant="h3" className={classes.title}>
        What I do
      </Typography>
      <div className={classes.row}>
        <div className={classes.column}>
          <IconButton className={classes.icon}>
            <WebIcon className={classes.subIcon} />
          </IconButton>
          <Typography variant="h5" className={classes.caption}>
            REST APIs
          </Typography>
          <Typography variant="subtitle1" className={classes.caption}>
            Strong knowledge developing REST APIs in Spring Boot (Java). Good
            practices and cutting edge technology with unit tests, integration
            tests, Swagger documentation, Liquibase for database schema
            migration.
          </Typography>
        </div>

        <div className={classes.column}>
          <IconButton className={classes.icon}>
            <StorageIcon className={classes.subIcon} />
          </IconButton>
          <Typography variant="h5" className={classes.caption}>
            Databases
          </Typography>
          <Typography variant="subtitle1" className={classes.caption}>
            Plenty experience working with databases: MSSQL, PostgreSQL, MySQL.
            Database design, normalization, diagrams, optimization.
          </Typography>
        </div>

        <div className={classes.column}>
          <IconButton className={classes.icon}>
            <ComputerIcon className={classes.subIcon} />
          </IconButton>
          <Typography variant="h5" className={classes.caption}>
            Frontend
          </Typography>
          <Typography variant="subtitle1" className={classes.caption}>
            Have been working lately a lot with React (javascript) for frontend
            development. Using modern CSS libraries like bootstrap and material
            UI for styling.
          </Typography>
        </div>

        <div className={classes.columnRight}>
          <IconButton className={classes.icon}>
            <AssessmentIcon className={classes.subIcon} />
          </IconButton>
          <Typography variant="h5" className={classes.caption}>
            Project Management
          </Typography>
          <Typography variant="subtitle1" className={classes.caption}>
            Business side experience managing projects in agile methodology,
            tasks, resources and strong experience estimating projects/tasks.
            Using modern tools like Jira, Azure devops, Github, etc.
          </Typography>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Resume;
