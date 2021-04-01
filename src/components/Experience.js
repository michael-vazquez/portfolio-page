import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Typography,
  IconButton,
  Button,
  useMediaQuery,
  Grid,
} from "@material-ui/core";
import Header from "./Header";
import Footer from "./Footer";
import Carousel from "react-material-ui-carousel";
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
import MsNetIcon from "./msnet.png";
import SquibbIcon from "./squibb.png";
import PrattIcon from "./pratt-whitney.svg";
import MaxarIcon from "./maxar.png";
import ChurchillIcon from "./churchill.png";

const useStyles = (smallMedia) =>
  makeStyles((theme) => ({
    container: {
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme.palette.primary.dark,
    },
    root: {
      flexGrow: 1,
    },
    row: {
      display: "flex",
      flexDirection: "row",
      margin: "auto",
    },
    column: {
      display: "flex",
      flexDirection: "column",
      marginRight: theme.spacing(20),
    },
    columnRight: {
      display: "flex",
      flexDirection: "column",
      marginRight: smallMedia ? theme.spacing(20) : "",
    },
    icon: {
      margin: "auto",
      width: smallMedia ? "100px" : "125px",
      height: smallMedia ? "100px" : "125px",
      marginTop: theme.spacing(0),
      marginBottom: theme.spacing(0),
      marginLeft: theme.spacing(0),
    },
    companyIcon: {
      margin: "auto",
      width: smallMedia ? "150px" : "200px",
      height: smallMedia ? "150px" : "200px",
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
      marginTop: smallMedia ? theme.spacing(2) : theme.spacing(8),
      textAlign: "center",
    },
    caption: {
      color: theme.palette.primary.contrastText,
      textAlign: smallMedia ? "left" : "center",
      marginTop: smallMedia ? theme.spacing(1) : theme.spacing(0),
      marginBottom: theme.spacing(2),
      marginLeft: smallMedia ? theme.spacing(2) : theme.spacing(0),
    },
    button: {
      marginTop: smallMedia ? theme.spacing(0) : theme.spacing(1),
      margin: "auto",
    },
    carousel: {
      width: "100%",
      marginLeft: theme.spacing(2),
    },
  }));

function Experience(props) {
  const theme = useTheme();
  const smallMedia = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = useStyles(smallMedia)();

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
      <Header handlePageChange={props.handlePageChange} />
      <Typography variant="h3" className={classes.title}>
        Experience
      </Typography>
      <div className={classes.row}>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12} sm={6}>
            <div className={classes.column}>
              <Typography variant="h5" className={classes.caption}>
                {smallMedia
                  ? "Technologies:"
                  : "Technologies I have worked with:"}
              </Typography>
              {smallMedia ? (
                <Carousel className={classes.carousel}>
                  <div className={classes.row}>
                    <IconButton className={classes.icon}>
                      <img
                        className={classes.subIcon}
                        src={SpringIcon}
                        alt="pic"
                      />
                    </IconButton>
                    <IconButton className={classes.icon}>
                      <img
                        className={classes.subIcon}
                        src={LiquibaseIcon}
                        alt="pic"
                      />
                    </IconButton>
                    <IconButton className={classes.icon}>
                      <img
                        className={classes.subIcon}
                        src={SwaggerIcon}
                        alt="pic"
                      />
                    </IconButton>
                  </div>
                  <div className={classes.row}>
                    <IconButton className={classes.icon}>
                      <img
                        className={classes.subIcon}
                        src={JunitIcon}
                        alt="pic"
                      />
                    </IconButton>
                    <IconButton className={classes.icon}>
                      <img
                        className={classes.subIcon}
                        src={ReactIcon}
                        alt="pic"
                      />
                    </IconButton>
                    <IconButton className={classes.icon}>
                      <img
                        className={classes.subIcon}
                        src={MaterialUiIcon}
                        alt="pic"
                      />
                    </IconButton>
                  </div>
                  <div className={classes.row}>
                    <IconButton className={classes.icon}>
                      <img
                        className={classes.subIcon}
                        src={DockerIcon}
                        alt="pic"
                      />
                    </IconButton>
                    <IconButton className={classes.icon}>
                      <img
                        className={classes.subIcon}
                        src={AzureIcon}
                        alt="pic"
                      />
                    </IconButton>
                    <IconButton className={classes.icon}>
                      <img
                        className={classes.subIcon}
                        src={SqlServerIcon}
                        alt="pic"
                      />
                    </IconButton>
                  </div>
                  <div className={classes.row}>
                    <IconButton className={classes.icon}>
                      <img
                        className={classes.subIcon}
                        src={PostgresIcon}
                        alt="pic"
                      />
                    </IconButton>
                    <IconButton className={classes.icon}>
                      <img
                        className={classes.subIcon}
                        src={MysqlIcon}
                        alt="pic"
                      />
                    </IconButton>
                    <IconButton className={classes.icon}>
                      <img
                        className={classes.subIcon}
                        src={MsNetIcon}
                        alt="pic"
                      />
                    </IconButton>
                  </div>
                </Carousel>
              ) : (
                <>
                  <div className={classes.row}>
                    <IconButton className={classes.icon}>
                      <img
                        className={classes.subIcon}
                        src={SpringIcon}
                        alt="pic"
                      />
                    </IconButton>
                    <IconButton className={classes.icon}>
                      <img
                        className={classes.subIcon}
                        src={LiquibaseIcon}
                        alt="pic"
                      />
                    </IconButton>
                    <IconButton className={classes.icon}>
                      <img
                        className={classes.subIcon}
                        src={SwaggerIcon}
                        alt="pic"
                      />
                    </IconButton>
                    <IconButton className={classes.icon}>
                      <img
                        className={classes.subIcon}
                        src={JunitIcon}
                        alt="pic"
                      />
                    </IconButton>
                  </div>
                  <div className={classes.row}>
                    <IconButton className={classes.icon}>
                      <img
                        className={classes.subIcon}
                        src={ReactIcon}
                        alt="pic"
                      />
                    </IconButton>
                    <IconButton className={classes.icon}>
                      <img
                        className={classes.subIcon}
                        src={MaterialUiIcon}
                        alt="pic"
                      />
                    </IconButton>
                    <IconButton className={classes.icon}>
                      <img
                        className={classes.subIcon}
                        src={DockerIcon}
                        alt="pic"
                      />
                    </IconButton>
                    <IconButton className={classes.icon}>
                      <img
                        className={classes.subIcon}
                        src={AzureIcon}
                        alt="pic"
                      />
                    </IconButton>
                  </div>

                  <div className={classes.row}>
                    <IconButton className={classes.icon}>
                      <img
                        className={classes.subIcon}
                        src={SqlServerIcon}
                        alt="pic"
                      />
                    </IconButton>
                    <IconButton className={classes.icon}>
                      <img
                        className={classes.subIcon}
                        src={PostgresIcon}
                        alt="pic"
                      />
                    </IconButton>
                    <IconButton className={classes.icon}>
                      <img
                        className={classes.subIcon}
                        src={MysqlIcon}
                        alt="pic"
                      />
                    </IconButton>
                    <IconButton className={classes.icon}>
                      <img
                        className={classes.subIcon}
                        src={MsNetIcon}
                        alt="pic"
                      />
                    </IconButton>
                  </div>
                </>
              )}
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.columnRight}>
              <Typography variant="h5" className={classes.caption}>
                {smallMedia ? "Companies:" : "Companies I have worked with:"}
              </Typography>
              {smallMedia ? (
                <Carousel className={classes.carousel}>
                  <div className={classes.row}>
                    <IconButton className={classes.companyIcon}>
                      <img
                        className={classes.subIcon}
                        src={SquibbIcon}
                        alt="pic"
                      />
                    </IconButton>
                    <IconButton className={classes.companyIcon}>
                      <img
                        className={classes.subIcon}
                        src={PrattIcon}
                        alt="pic"
                      />
                    </IconButton>
                  </div>
                  <div className={classes.row}>
                    <IconButton className={classes.companyIcon}>
                      <img
                        className={classes.subIcon}
                        src={MaxarIcon}
                        alt="pic"
                      />
                    </IconButton>
                    <IconButton className={classes.companyIcon}>
                      <img
                        className={classes.subIcon}
                        src={ChurchillIcon}
                        alt="pic"
                      />
                    </IconButton>
                  </div>
                </Carousel>
              ) : (
                <>
                  <div className={classes.row}>
                    <IconButton className={classes.companyIcon}>
                      <img
                        className={classes.subIcon}
                        src={SquibbIcon}
                        alt="pic"
                      />
                    </IconButton>
                    <IconButton className={classes.companyIcon}>
                      <img
                        className={classes.subIcon}
                        src={PrattIcon}
                        alt="pic"
                      />
                    </IconButton>
                  </div>

                  <div className={classes.row}>
                    <IconButton className={classes.companyIcon}>
                      <img
                        className={classes.subIcon}
                        src={MaxarIcon}
                        alt="pic"
                      />
                    </IconButton>
                    <IconButton className={classes.companyIcon}>
                      <img
                        className={classes.subIcon}
                        src={ChurchillIcon}
                        alt="pic"
                      />
                    </IconButton>
                  </div>
                </>
              )}
            </div>
          </Grid>
        </Grid>
      </div>
      <Button
        size={smallMedia ? "small" : "medium"}
        type="submit"
        variant="contained"
        className={classes.button}
        onClick={() => downloadResume()}
      >
        Download Resume
      </Button>
      {!smallMedia ? <Footer /> : null}
    </div>
  );
}

export default Experience;
