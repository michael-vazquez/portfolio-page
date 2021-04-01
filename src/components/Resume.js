import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Typography, IconButton, useMediaQuery, Grid } from "@material-ui/core";
import Header from "./Header";
import Footer from "./Footer";
import WebIcon from "@material-ui/icons/Web";
import StorageIcon from "@material-ui/icons/Storage";
import ComputerIcon from "@material-ui/icons/Computer";
import AssessmentIcon from "@material-ui/icons/Assessment";

const useStyles = (smallMedia) =>
  makeStyles((theme) => ({
    container: {
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme.palette.secondary.main,
    },
    root: {
      flexGrow: 1,
    },
    row: {
      display: "flex",
      flexDirection: "row",
      margin: "auto",
      marginTop: smallMedia ? theme.spacing(10) : theme.spacing(20),
    },
    column: {
      display: "flex",
      flexDirection: "column",
      maxWidth: "400px",
      marginRight: smallMedia ? theme.spacing(3) : theme.spacing(6),
    },
    columnRight: {
      display: "flex",
      flexDirection: "column",
      maxWidth: "400px",
    },
    icon: {
      margin: "auto",
      width: smallMedia ? "100px" : "150px",
      height: smallMedia ? "100px" : "150px",
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
      marginTop: smallMedia ? theme.spacing(2) : theme.spacing(8),
      textAlign: "center",
      marginBottom: theme.spacing(0),
    },
    caption: {
      color: theme.palette.primary.contrastText,
      textAlign: "center",
      marginTop: theme.spacing(0),
      marginBottom: theme.spacing(2),
      fontSize: smallMedia ? "1.25rem" : "",
    },
  }));

function Resume(props) {
  const theme = useTheme();
  const smallMedia = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = useStyles(smallMedia)();

  return (
    <div className={classes.container}>
      <Header handlePageChange={props.handlePageChange} />
      <Typography variant="h3" className={classes.title}>
        What I do
      </Typography>
      <div className={classes.row}>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={6} sm={3}>
            <div className={classes.column}>
              <IconButton className={classes.icon}>
                <WebIcon className={classes.subIcon} />
              </IconButton>
              <Typography variant="h5" className={classes.caption}>
                REST APIs
              </Typography>
              {!smallMedia ? (
                <Typography variant="subtitle1" className={classes.caption}>
                  Strong knowledge developing REST APIs in Spring Boot (Java).
                  Good practices and cutting edge technology with unit tests,
                  integration tests, Swagger documentation, Liquibase for
                  database schema migration.
                </Typography>
              ) : null}
            </div>
          </Grid>
          <Grid item xs={6} sm={3}>
            <div className={classes.column}>
              <IconButton className={classes.icon}>
                <StorageIcon className={classes.subIcon} />
              </IconButton>
              <Typography variant="h5" className={classes.caption}>
                Databases
              </Typography>
              {!smallMedia ? (
                <Typography variant="subtitle1" className={classes.caption}>
                  Plenty experience working with databases: MSSQL, PostgreSQL,
                  MySQL. Database design, normalization, diagrams, optimization.
                </Typography>
              ) : null}
            </div>
          </Grid>
          <Grid item xs={6} sm={3}>
            <div className={classes.column}>
              <IconButton className={classes.icon}>
                <ComputerIcon className={classes.subIcon} />
              </IconButton>
              <Typography variant="h5" className={classes.caption}>
                Frontend
              </Typography>
              {!smallMedia ? (
                <Typography variant="subtitle1" className={classes.caption}>
                  Have been working lately a lot with React (javascript) for
                  frontend development. Using modern CSS libraries like
                  bootstrap and material UI for styling.
                </Typography>
              ) : null}
            </div>
          </Grid>
          <Grid item xs={6} sm={3}>
            <div className={classes.columnRight}>
              <IconButton className={classes.icon}>
                <AssessmentIcon className={classes.subIcon} />
              </IconButton>
              <Typography variant="h5" className={classes.caption}>
                Project Management
              </Typography>
              {!smallMedia ? (
                <Typography variant="subtitle1" className={classes.caption}>
                  Business side experience managing projects in agile
                  methodology, tasks, resources and strong experience estimating
                  projects/tasks. Using modern tools like Jira, Azure devops,
                  Github, etc.
                </Typography>
              ) : null}
            </div>
          </Grid>
        </Grid>
      </div>
      {!smallMedia ? <Footer /> : null}
    </div>
  );
}

export default Resume;
