import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import Link from "../Link";

const StyledFooter = styled("footer")(({ theme }) => ({
  backgroundColor: theme.palette.common.arcBlue,
  width: "100%",
  zIndex: 1302,
  position: "relative",
}));

const AdornmentImg = styled("img")(({ theme }) => ({
  width: "25em",
  verticalAlign: "bottom",
  [theme.breakpoints.down("md")]: {
    width: "21em",
  },
  [theme.breakpoints.down("sm")]: {
    width: "15em",
  },
}));

const MainContainer = styled(Grid)(({ theme }) => ({
  position: "absolute",
}));
const StyledGridLink = styled(Grid)(({ theme }) => ({
  color: "white",
  fontFamily: "Arial",
  fontSize: "0.75rem",
  fontWeight: "bold",
  textDecoration: "none",
}));
const StyledGridItem = styled(Grid)(({ theme }) => ({
  margin: "3em",
}));

const StyledIcon = styled("img")(({ theme }) => ({
  height: "4em",
  width: "4em",
  [theme.breakpoints.down("sm")]: {
    height: "2.5em",
    width: "2.5em",
  },
}));

const SocialContainer = styled(Grid)(({ theme }) => ({
  position: "absolute",
  marginTop: "-6em",
  right: "1.5em",
  [theme.breakpoints.down("sm")]: {
    right: "0.6em",
  },
}));

function Footer(props) {
  const { setValue, setSelectedIndex } = props;

  return (
    <StyledFooter>
      <MainContainer
        sx={{ display: { xs: "none", md: "flex" } }}
        justifyContent="center"
        container
      >
        <StyledGridItem item>
          <Grid container direction="column" spacing={2} style={{ margin: 0 }}>
            <StyledGridLink
              component={Link}
              href="/"
              onClick={() => setValue(0)}
              item
            >
              Home
            </StyledGridLink>
          </Grid>
        </StyledGridItem>
        <StyledGridItem item>
          <Grid container direction="column" spacing={2} style={{ margin: 0 }}>
            <StyledGridLink
              component={Link}
              href="/services"
              onClick={() => {
                setValue(1);
                setSelectedIndex(0);
              }}
              item
            >
              Services
            </StyledGridLink>
            <StyledGridLink
              component={Link}
              href="/customSoftware"
              onClick={() => {
                setValue(1);
                setSelectedIndex(1);
              }}
              item
            >
              Custom Software Development
            </StyledGridLink>
            <StyledGridLink
              component={Link}
              href="/mobileApps"
              onClick={() => {
                setValue(1);
                setSelectedIndex(2);
              }}
              item
            >
              iOS/Android App Development
            </StyledGridLink>
            <StyledGridLink
              component={Link}
              href="/websites"
              onClick={() => {
                setValue(1);
                setSelectedIndex(3);
              }}
              item
            >
              Website Development
            </StyledGridLink>
          </Grid>
        </StyledGridItem>
        <StyledGridItem item>
          <Grid container direction="column" spacing={2} style={{ margin: 0 }}>
            <StyledGridLink
              component={Link}
              href="/revolution"
              onClick={() => setValue(2)}
              item
            >
              The Revolution
            </StyledGridLink>
            <StyledGridLink
              component={Link}
              href="/revolution"
              onClick={() => setValue(2)}
              item
            >
              Vision
            </StyledGridLink>
            <StyledGridLink
              component={Link}
              href="/revolution"
              onClick={() => setValue(2)}
              item
            >
              Technology
            </StyledGridLink>
            <StyledGridLink
              component={Link}
              href="/revolution"
              onClick={() => setValue(2)}
              item
            >
              Process
            </StyledGridLink>
          </Grid>
        </StyledGridItem>
        <StyledGridItem item>
          <Grid container direction="column" spacing={2} style={{ margin: 0 }}>
            <StyledGridLink
              component={Link}
              href="/about"
              onClick={() => setValue(3)}
              item
            >
              About Us
            </StyledGridLink>
            <StyledGridLink
              component={Link}
              href="/about"
              onClick={() => setValue(3)}
              item
            >
              History
            </StyledGridLink>
            <StyledGridLink
              component={Link}
              href="/about"
              onClick={() => setValue(3)}
              item
            >
              Team
            </StyledGridLink>
          </Grid>
        </StyledGridItem>
        <StyledGridItem item>
          <Grid container direction="column" spacing={2} style={{ margin: 0 }}>
            <StyledGridLink
              component={Link}
              href="/contact"
              onClick={() => setValue(4)}
              item
            >
              Contact Us
            </StyledGridLink>
          </Grid>
        </StyledGridItem>
      </MainContainer>
      <AdornmentImg
        src="/assets/footerAdornment.svg"
        alt="Black decorative slash"
      />
      <SocialContainer spacing={2} justifyContent="flex-end" container>
        <Grid
          item
          component="a"
          href="https://www.facebook.com"
          rel="nooperner noreferrer"
          target="_blank"
        >
          <StyledIcon alt="Facebook Logo" src="/assets/facebook.svg" />
        </Grid>
        <Grid
          item
          component="a"
          href="https://www.twitter.com"
          rel="nooperner noreferrer"
          target="_blank"
        >
          <StyledIcon alt="Twitter Logo" src="/assets/twitter.svg" />
        </Grid>
        <Grid
          item
          component="a"
          href="https://www.instagram.com"
          rel="nooperner noreferrer"
          target="_blank"
        >
          <StyledIcon alt="Instagram Logo" src="/assets/instagram.svg" />
        </Grid>
      </SocialContainer>
    </StyledFooter>
  );
}

export default Footer;
