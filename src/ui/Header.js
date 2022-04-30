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
import Link from "../Link";

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

const MyImg = styled("svg")(({ theme }) => ({
  height: "8em",
  textTransform: "none",
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
      link: "/customSoftware",
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: "iOS/Android App Development",
      link: "/mobileApps",
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
          if (value !== 5) {
            setValue(5);
          }
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
            href={route.link}
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
        href="/estimate"
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
              href={option.link}
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
              href={route.link}
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
            href="/estimate"
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
              href="/"
              style={{ textDecoration: "none" }}
            >
              {/* <MyImg src="/assets/logo.svg" alt="Company Logo" /> */}
              <MyImg
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 480 139"
              >
                <style>
                  {`.st0{fill:none}.st1{fill:#fff}.st2{font-family:Raleway; font-weight: 300;}
                  .st6{fill:none;stroke:#000;stroke-width:3;stroke-miterlimit:10}`}
                </style>
                <path d="M448.07-1l-9.62 17.24-8.36 14.96L369.93 139H-1V-1z" />
                <path className="st0" d="M-1 139h479.92v.01H-1z" />
                <text
                  transform="translate(261.994 65.233)"
                  className="st1 st2"
                  fontSize="57"
                >
                  Arc
                </text>
                <text
                  transform="translate(17.692 112.015)"
                  className="st1 st2"
                  fontSize="54"
                >
                  Development
                </text>
                <path
                  className="st0"
                  d="M382.44 116.43l47.65-85.23 8.36-14.96M369.83 139l-.01.01L362 153"
                />
                <path
                  d="M438.76 15.76l-56.42 100.91c-12.52-10.83-20.45-26.82-20.45-44.67 0-32.58 26.42-59 59-59 6.23 0 12.24.97 17.87 2.76z"
                  fill="#0b72b9"
                />
                <path d="M479.89 72c0 32.58-26.42 59-59 59-14.73 0-28.21-5.4-38.55-14.33l56.42-100.91c23.85 7.57 41.13 29.89 41.13 56.24z" />
                <g id="Group_186" transform="translate(30.153 11.413)">
                  <g id="Group_185">
                    <g id="Words">
                      <path
                        id="Path_59"
                        className="st1"
                        d="M405.05 14.4l-.09 80.38-7.67-.01.06-52.25-29.4 52.21-7.94-.01 45.04-80.32z"
                      />
                    </g>
                  </g>
                </g>
                <path
                  className="st0"
                  d="M457-17l-8.93 16-9.62 17.24-8.36 14.96L369.93 139l-.01.01L361 155"
                />
              </MyImg>
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
