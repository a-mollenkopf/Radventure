import React from "react";
import { makeStyles, useTheme, styled } from "@material-ui/core/styles";
import Logo from "./Assets/logo192.png";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import { fade } from "@material-ui/core/styles/colorManipulator";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { withRouter } from "react-router-dom";

// STYLING FOR THE APPBAR
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1,
    },
  },
  headerOptions: {
    display: "flex",
    flex: 1,
    justifyContent: "space-evenly",
  },
}));

const MyAppBar = styled(AppBar)({
  position: "static",
  backgroundColor: fade("#3f50b5", 0.7),
  height: 120,
});

// NOTE: THIS IS FOR COLLAPSE ON MOBILE
const MyIconButton = styled(IconButton)({
  edge: "start",
  marginLeft: "auto",
  color: "inherit",
});

const MyButton = styled(Button)({
  variant: "contained",
  backgroundColor: "#ffc107",
});

const styles = {
  img: {
    height: 800,
    paddingBottom: 200,
    marginLeft: -30
  },
  brandNoLogo: {
    height: 110
  }
};
// END OF STYLING FOR APPBAR

const Header = (props) => {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleButtonClick = (pageURL) => {
    history.push(pageURL);
  };

  const menuItems = [
    {
      menuTitle: "Search",
      pageURL: "/",
    },
    {
      menuTitle: "Trips",
      pageURL: "/PastTrips",
    },
  ];

  return (
    <div className={classes.root}>
      <MyAppBar>
        <Toolbar>
          <img src="https://i.imgur.com/flaLNZU.png" className="brandNoLogo" style={styles.brandNoLogo}></img>
          <img
            src="https://i.imgur.com/YDtpJUO.png"
            className="logo"
            style={styles.img}
          />
          {isMobile ? (
            // THIS CHECKS TO SEE WHETHER THE SCREEN IS MOBILE OR NOT. REFER
            // LINE 64 MEDIA QUERY
            <>
              <MyIconButton
                className={classes.menuButton}
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </MyIconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuItems.map((menuItem) => {
                  const { menuTitle, pageURL } = menuItem;
                  return (
                    <MenuItem onClick={() => handleMenuClick(pageURL)}>
                      {menuTitle}
                    </MenuItem>
                  );
                })}
              </Menu>
            </>
          ) : (
            // THIS IS DISPLAYED WHEN THE SCREEN IS NOT MOBILE
            <div className={classes.headerOptions}>
              <MyButton
                size="large"
                onClick={() => handleButtonClick("/search")}
              >
                Search
              </MyButton>
              <MyButton
                size="large"
                onClick={() => handleButtonClick("/PastTrips")}
              >
                TRIPS
              </MyButton>
            </div>
          )}
        </Toolbar>
      </MyAppBar>
    </div>
  );
};

export default withRouter(Header);
