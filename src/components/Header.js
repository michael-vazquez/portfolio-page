import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Typography,
  Breadcrumbs,
  Link,
  useMediaQuery,
  IconButton,
  Menu,
  MenuItem,
} from "@material-ui/core";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

const useStyles = makeStyles((theme) => ({
  header: {
    alignSelf: "end",
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
  icon: {
    marginRight: theme.spacing(1),
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
    },
  },
}));

function Header(props) {
  const classes = useStyles();

  const theme = useTheme();
  const smallMedia = useMediaQuery(theme.breakpoints.down("sm"));

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (page) => {
    props.handlePageChange(page);
    setAnchorEl(null);
  };

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.header}>
      {smallMedia ? (
        <>
          <IconButton className={classes.icon} onClick={openMenu}>
            <MenuRoundedIcon fontSize="large" />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => handleClick(0)}>About Me</MenuItem>
            <MenuItem onClick={() => handleClick(1)}>Skills</MenuItem>
            <MenuItem onClick={() => handleClick(2)}>Experience</MenuItem>
            <MenuItem onClick={() => handleClick(3)}>Contact Me</MenuItem>
          </Menu>
        </>
      ) : (
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
      )}
    </div>
  );
}

export default Header;
