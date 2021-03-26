import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Breadcrumbs, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    alignSelf: "end",
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
  link: {
    "&:hover": {
      textDecoration: "none",
    },
  },
  items: {
    color: theme.palette.primary.contrastText,
    marginRight: theme.spacing(10),
    marginTop: theme.spacing(2),
    textAlign: "left",
    "&:hover": {
      color: "black",
      backgroundColor: "white",
      cursor: "pointer",
      textDecoration: "none",
    },
  },
}));

function Header(props) {
  const classes = useStyles();

  const handleClick = (page) => {
    console.log(page);
    props.handlePageChange(page);
  };

  return (
    <div className={classes.header}>
      <Breadcrumbs separator=" " aria-label="breadcrumb">
        <Link
          color="inherit"
          onClick={() => handleClick(0)}
          className={classes.link}
        >
          <Typography variant="subtitle1" className={classes.items}>
            About Me
          </Typography>
        </Link>
        <Link
          color="inherit"
          onClick={() => handleClick(1)}
          className={classes.link}
        >
          <Typography variant="subtitle1" className={classes.items}>
            Skills
          </Typography>
        </Link>
        <Link
          color="inherit"
          onClick={() => handleClick(2)}
          className={classes.link}
        >
          <Typography variant="subtitle1" className={classes.items}>
            Experience
          </Typography>
        </Link>
        <Link
          color="inherit"
          onClick={() => handleClick(3)}
          className={classes.link}
        >
          <Typography variant="subtitle1" className={classes.items}>
            Contact Me
          </Typography>
        </Link>
      </Breadcrumbs>
    </div>
  );
}

export default Header;
