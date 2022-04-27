import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  useScrollTrigger,
  Menu,
  MenuItem,
  useMediaQuery,
  SwipeableDrawer,
  IconButton,
  List,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { useTheme } from "@mui/system";
import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";

const MyComponent = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
  marginBottom: "3em",
  [theme.breakpoints.down("md")]: {
    marginBottom: "2em",
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: "1.25em",
  },
}));

const MyImg = styled("img")(({ theme }) => ({
  height: "8em",
  [theme.breakpoints.down("md")]: {
    height: "7em",
  },
  [theme.breakpoints.down("sm")]: {
    height: "5.5em",
  },
}));

const MyTabs = styled(Tabs)({
  marginLeft: "auto",
});

const MyTab = styled(Tab)(({ theme }) => ({
  ...theme.typography.tab,
  minWidth: 10,
  marginLeft: "25px",
  color: "#ffffff",
}));

const MyButton = styled(Button)(({ theme }) => ({
  ...theme.typography.estimate,
  borderRadius: "50px",
  marginLeft: "50px",
  marginRight: "25px",
  height: "45px",
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
  },
}));
const LogoContainer = styled(Button)(({ theme }) => ({
  padding: 0,
  "&:hover": {
    backgroundColor: "transparent",
  },
}));

const MyMenu = styled(Menu)(({ theme }) => ({
  "& .MuiMenu-paper": {
    backgroundColor: theme.palette.common.arcBlue,
    borderRadius: 0,
  },
}));
const MyMenuItem = styled(MenuItem)(({ theme }) => ({
  ...theme.typography.tab,
  opacity: 0.7,
  ":hover": {
    opacity: 1,
  },
  backgroundColor: "inherit",
  "&.Mui-selected": {
    backgroundColor: "#0e3d5e40",
    opacity: 1,
  },
}));

const DrawerIconContainer = styled(IconButton)(({ theme }) => ({
  marginLeft: "auto",
  "&:hover": {
    backgroundColor: "transparent",
  },
}));
const DrawerIcon = styled(MenuIcon)(({ theme }) => ({
  height: "50px",
  width: "50px",
}));

const StyledSwipeableDrawer = styled(SwipeableDrawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    backgroundColor: theme.palette.common.arcBlue,
    // color: "white",
  },
}));
const StyledDrawerItem = styled(ListItemText)(({ theme }) => ({
  ...theme.typography.tabs,
  color: "white",
}));
const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  backgroundColor: "inherit",
  opacity: 0.7,
  "&.Mui-selected": {
    backgroundColor: "#0e3d5e40",
    opacity: 1,
  },
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.modal + 1,
}));

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function Header(props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const { value, setValue, selectedIndex, setSelectedIndex } = props;

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(i);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const menuOptions = [
    { name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0 },
    {
      name: "Custom Software Development",
      link: "/custom-software",
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: "iOS/Android App Development",
      link: "/mobile-apps",
      activeIndex: 1,
      selectedIndex: 2,
    },
    {
      name: "Website Development",
      link: "/websites",
      activeIndex: 1,
      selectedIndex: 3,
    },
  ];

  const routes = [
    { name: "Home", link: "/", activeIndex: 0 },
    {
      name: "Services",
      link: "/services",
      activeIndex: 1,
      ariaHaspopup: anchorEl ? true : undefined,
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      mouseOver: (event) => handleClick(event),
    },
    { name: "The Revolution", link: "/revolution", activeIndex: 2 },
    { name: "About Us", link: "/about", activeIndex: 3 },
    { name: "Contact Us", link: "/contact", activeIndex: 4 },
  ];

  useEffect(() => {
    [...menuOptions, ...routes].forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex);
            }
          }
          break;

        case "/estimate":
          setValue(5);
          break;

        default:
          break;
      }
    });
  }, [value, menuOptions, selectedIndex, routes, props]);

  const tabs = () => (
    <React.Fragment>
      <MyTabs value={value} onChange={handleChange} textColor="inherit">
        {routes.map((route, index) => (
          <MyTab
            LinkComponent={Link}
            to={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaHaspopup}
            onMouseOver={route.mouseOver}
            key={`${route}${index}`}
          />
        ))}
      </MyTabs>
      <MyButton
        LinkComponent={Link}
        to="/estimate"
        variant="contained"
        color="secondary"
        onClick={() => setValue(5)}
      >
        Free Estimate
      </MyButton>
      <MyMenu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        elevation={0}
        style={{ zIndex: 1302 }}
        keepMounted
      >
        {menuOptions.map((option, index) => (
          <MyMenuItem
            key={index}
            onClick={(event) => {
              handleMenuItemClick(event, index);
              setValue(1);
              handleClose();
            }}
            selected={index === selectedIndex && value === 1}
          >
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              to={option.link}
            >
              {option.name}
            </Link>
          </MyMenuItem>
        ))}
      </MyMenu>
    </React.Fragment>
  );

  const drawer = () => (
    <React.Fragment>
      <StyledSwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        <MyComponent />
        <List disablePadding>
          {routes.map((route) => (
            <StyledListItemButton
              onClick={() => {
                setOpenDrawer(false);
                setValue(route.activeIndex);
              }}
              divider
              component={Link}
              to={route.link}
              selected={value === route.activeIndex}
              key={`${route}${route.activeIndex}`}
            >
              <StyledDrawerItem disableTypography>
                {route.name}
              </StyledDrawerItem>
            </StyledListItemButton>
          ))}

          <StyledListItemButton
            onClick={() => {
              setOpenDrawer(false);
              setValue(5);
            }}
            divider
            component={Link}
            to="/estimate"
            selected={value === 5}
            style={{
              backgroundColor: theme.palette.common.arcOrange,
            }}
          >
            <StyledDrawerItem disableTypography>Free Estimate</StyledDrawerItem>
          </StyledListItemButton>
        </List>
      </StyledSwipeableDrawer>
      <DrawerIconContainer
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <DrawerIcon />
      </DrawerIconContainer>
    </React.Fragment>
  );

  return (
    <>
      <ElevationScroll>
        <StyledAppBar position="fixed">
          <Toolbar disableGutters>
            <LogoContainer
              onClick={() => setValue(0)}
              disableRipple
              LinkComponent={Link}
              to="/"
            >
              <MyImg src={logo} alt="Company Logo" />
            </LogoContainer>
            {matches ? drawer() : tabs()}
          </Toolbar>
        </StyledAppBar>
      </ElevationScroll>
      <MyComponent />
    </>
  );
}

export default Header;
