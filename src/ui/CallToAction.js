import React from "react";
import { Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { styled, useTheme } from "@mui/system";
import { Link } from "react-router-dom";
import ButtonArrow from "./ButtonArrow";

import background from "../../assets/background.jpg";
import mobileBackground from "../../assets/mobileBackground.jpg";

const LearnButton = styled(Button)(({ theme }) => ({
  ...theme.typography.learnButton,
  fontSize: "0.7rem",
  height: 35,
  padding: 5,
  [theme.breakpoints.down("md")]: {
    marginBottom: "2em",
  },
}));

const Background = styled(Grid)(({ theme }) => ({
  backgroundImage: `url(${background})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
  backgroundRepeat: "no-repeat",
  height: "60em",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    backgroundImage: `url(${mobileBackground})`,
    backgroundAttachment: "inherit",
  },
}));

const EstimateButton = styled(Button)(({ theme }) => ({
  ...theme.typography.estimate,
  borderRadius: 50,
  height: 80,
  width: 205,
  backgroundColor: theme.palette.common.arcOrange,
  fontSize: "1.5rem",
  marginRight: "5em",
  marginLeft: "2em",
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
  },
  [theme.breakpoints.down("md")]: {
    marginLeft: 0,
    marginRight: 0,
  },
}));

function CallToAction(props) {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const { setValue, setSelectedIndex } = props;

  return (
    <Background
      container
      alignItems="center"
      justifyContent={matchesMD ? "center" : "space-between"}
      direction={matchesMD ? "column" : "row"}
    >
      <Grid
        item
        style={{
          marginLeft: matchesMD ? 0 : "5em",
          textAlign: matchesMD ? "center" : "inherit",
        }}
      >
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h2">
              Simple Software.
              <br /> Revolutionary Results.
            </Typography>
            <Typography variant="subtitle2" style={{ fontSize: "1.5rem" }}>
              Take advantage of 21st Century.
            </Typography>
            <Grid
              container
              item
              justifyContent={matchesMD ? "center" : undefined}
            >
              <LearnButton
                component={Link}
                to="/revolution"
                variant="outlined"
                onClick={() => {
                  setValue(2);
                }}
              >
                <span style={{ marginRight: 5 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.arcBlue}
                />
              </LearnButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <EstimateButton
          component={Link}
          to="/estimate"
          variant="contained"
          onClick={() => setValue(5)}
        >
          Free Estimate
        </EstimateButton>
      </Grid>
    </Background>
  );
}

export default CallToAction;
