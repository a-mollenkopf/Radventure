import React from "react";
import {
  makeStyles,
  useTheme,
  styled,
} from "@material-ui/core/styles";
import Logo from "./Assets/logo192.png";
import Brand from "./Assets/Brand.png";
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
import "../Appbar/Appbar.css";

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
    justifyContent: "flex-end",
  },
}));

const styles = {
  Avatar: {
    height: "6rem",
    width: "6rem",
  },
  AvatarMobile: {
    height: "60%",
    width: "40%",
  },
};

const MyAppBar = styled(AppBar)({
  position: "static",
  backgroundColor: fade("#3f50b5", 0.7),


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
  marginRight: '1rem',
});

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
      pageURL: "/search",
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
          {/* <img src={Brand} style={styles.Avatar}/> */}
          {isMobile ? (
            // THIS CHECKS TO SEE WHETHER THE SCREEN IS MOBILE OR NOT. REFER
            // LINE 64 MEDIA QUERY
            <>
              <img src={Brand} style={styles.AvatarMobile} alt="logo" />

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
                    <MenuItem
                      onClick={() => handleMenuClick(pageURL)}
                    >
                      {menuTitle}
                    </MenuItem>
                  );
                })}
              </Menu>
            </>
          ) : (
            // THIS IS DISPLAYED WHEN THE SCREEN IS NOT MOBILE
            <>
              <Avatar src={Logo} style={styles.Avatar} />
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
            </>
          )}
        </Toolbar>
      </MyAppBar>
    </div>
  );
};



export default withRouter(Header);





// import React from "react";
// import {
//   makeStyles,
//   useTheme,
//   styled,
// } from "@material-ui/core/styles";
// import Logo from "./Assets/logo192.png";
// import Brand from "./Assets/Brand.png";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Avatar from "@material-ui/core/Avatar";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import MenuItem from "@material-ui/core/MenuItem";
// import Menu from "@material-ui/core/Menu";
// import Button from "@material-ui/core/Button";
// import { fade } from "@material-ui/core/styles/colorManipulator";
// import useMediaQuery from "@material-ui/core/useMediaQuery";
// import { withRouter } from "react-router-dom";

// // STYLING FOR THE APPBAR
// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     [theme.breakpoints.down("xs")]: {
//       flexGrow: 1,
//     },
//   },
//   headerOptions: {
//     display: "flex",
//     flex: 1,
//     justifyContent: "space-evenly",
//   },
// }));

// const styles = {
//   Avatar: {
//     height: "60%",
//     width: "60%",
//   },
// };

// const MyAppBar = styled(AppBar)({
//   position: "static",
//   backgroundColor: fade("#3f50b5", 0.7),
// });

// // NOTE: THIS IS FOR COLLAPSE ON MOBILE
// const MyIconButton = styled(IconButton)({
//   edge: "start",
//   marginLeft: "auto",
//   color: "inherit",
// });

// const MyButton = styled(Button)({
//   variant: "contained",
//   backgroundColor: "#ffc107",
// });

// // END OF STYLING FOR APPBAR

// const Header = (props) => {
//   const { history } = props;
//   const classes = useStyles();
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClick = (pageURL) => {
//     history.push(pageURL);
//     setAnchorEl(null);
//   };

//   const handleButtonClick = (pageURL) => {
//     history.push(pageURL);
//   };

//   const menuItems = [
//     {
//       menuTitle: "Search",
//       pageURL: "/search",
//     },
//     {
//       menuTitle: "Trips",
//       pageURL: "/PastTrips",
//     },
//   ];

//   return (
//     <div className={classes.root}>
//       <MyAppBar>
//         <Toolbar>
//           {/* <img src={Brand} style={styles.Avatar}/> */}
//           {isMobile ? (
//             // THIS CHECKS TO SEE WHETHER THE SCREEN IS MOBILE OR NOT. REFER
//             // LINE 64 MEDIA QUERY
//             <>
//               <img src={Brand} style={styles.Avatar} />

//               <MyIconButton
//                 className={classes.menuButton}
//                 aria-label="menu"
//                 onClick={handleMenu}
//               >
//                 <MenuIcon />
//               </MyIconButton>
//               <Menu
//                 id="menu-appbar"
//                 anchorEl={anchorEl}
//                 anchorOrigin={{
//                   vertical: "top",
//                   horizontal: "right",
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: "top",
//                   horizontal: "right",
//                 }}
//                 open={open}
//                 onClose={() => setAnchorEl(null)}
//               >
//                 {menuItems.map((menuItem) => {
//                   const { menuTitle, pageURL } = menuItem;
//                   return (
//                     <MenuItem
//                       onClick={() => handleMenuClick(pageURL)}
//                     >
//                       {menuTitle}
//                     </MenuItem>
//                   );
//                 })}
//               </Menu>
//             </>
//           ) : (
//             // THIS IS DISPLAYED WHEN THE SCREEN IS NOT MOBILE
//             <div>
//               <Avatar src={Logo} style={styles.Avatar} />
//               <div className={classes.headerOptions}>
//                 <MyButton
//                   size="large"
//                   onClick={() => handleButtonClick("/search")}
//                 >
//                   Search
//                 </MyButton>

//                 <MyButton
//                   size="large"
//                   onClick={() => handleButtonClick("/PastTrips")}
//                 >
//                   TRIPS
//                 </MyButton>
//               </div>
//             </div>
//           )}
//         </Toolbar>
//       </MyAppBar>
//     </div>
//   );
// };

// export default withRouter(Header);
