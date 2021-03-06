import { Grid, IconButton, Typography, useMediaQuery } from "@mui/material";
import { styled, useTheme } from "@mui/system";
import React from "react";
import Link from "../src/Link";
import Head from "next/head";

import CallToAction from "../src/ui/CallToAction";

const RowContainer = styled(Grid)(({ theme }) => ({
  paddingLeft: "5em",
  paddingRight: "5em",
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "1.5em",
    paddingRight: "1.5em",
  },
}));
const HeadingGrid = styled(Grid)(({ theme }) => ({
  maxWidth: "40em",
}));
const ArrowContainer = styled(Grid)(({ theme }) => ({
  marginTop: "0.5em",
}));

const ParagraphContainer = styled(Grid)(({ theme }) => ({
  maxWidth: "30em",
}));

function Websites(props) {
  const { setValue, setSelectedIndex } = props;
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction="column">
      <Head>
        <title key="title">
          Stunning Custom Website Design | Arc Development
        </title>
        <meta
          name="description"
          key="description"
          content="Completely custom designed and built from scratch to be blazing fast. Optimized code, server-side rendering, and perfect responsive design | 99% PageSpeed Score"
        />
        <meta
          property="og:title"
          content="Bringing West Coast Technology to the Midwest | Websites"
          key="og:title"
        />
        <meta property="og:url" content="arc.com/websites" key="og:url" />
        <link rel="canonical" key="canonical" href="arc.com/website" />
      </Head>
      <RowContainer
        item
        container
        direction={matchesSM ? "column" : "row"}
        justifyContent={matchesMD ? "center" : undefined}
        style={{ marginTop: matchesXS ? "1em" : "2em" }}
      >
        {matchesMD ? null : (
          <ArrowContainer
            item
            style={{ marginRight: "1em", marginLeft: "-3.5em" }}
          >
            <IconButton
              component={Link}
              href="/mobileApps"
              onClick={() => {
                setValue(1);
                setSelectedIndex(2);
              }}
              style={{ backgroundColor: "transparent" }}
            >
              <img src="/assets/backArrow.svg" alt="Back to mobile apps page" />
            </IconButton>
          </ArrowContainer>
        )}

        <HeadingGrid item container direction="column">
          <Grid item>
            <Typography align={matchesMD ? "center" : undefined} variant="h1">
              Website Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Having a website is a necessity in today&#39;s business world. They
              give you one central, public location to let people know who you
              are, what you do, and why you&#39;re the best at it.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              From simply having your hours posted to having a full fledged
              online store, making yourself as accessible as possible to users
              online drives growth and enables you to reach new customers
            </Typography>
          </Grid>
        </HeadingGrid>
        {matchesMD ? null : (
          <ArrowContainer item>
            <IconButton
              component={Link}
              href="/services"
              onClick={() => {
                setValue(1);
                setSelectedIndex(0);
              }}
              style={{ backgroundColor: "transparent" }}
            >
              <img
                src="/assets/forwardArrow.svg"
                alt="Forward to Services Page"
              />
            </IconButton>
          </ArrowContainer>
        )}
      </RowContainer>
      <RowContainer
        item
        container
        direction={matchesSM ? "column" : "row"}
        alignItems="center"
        style={{ marginTop: "15em" }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="h4"
                gutterBottom
              >
                Analytics
              </Typography>
            </Grid>
            <Grid item>
              <img
                src="/assets/analytics.svg"
                style={{ marginLeft: "-2.75em" }}
                alt="graph with magnifying glass revealing 1's and 0's"
              />
            </Grid>
          </Grid>
        </Grid>
        <ParagraphContainer item>
          <Typography
            align={matchesSM ? "center" : undefined}
            variant="body1"
            paragraph
          >
            Knowledge is power, and data is 21st Century gold. Analyzing this
            data can reveal hidden patterns and trends in your business,
            empowering you to make smarter decisions with measurable effects.
          </Typography>
        </ParagraphContainer>
      </RowContainer>
      <RowContainer
        item
        container
        direction={matchesSM ? "column" : "row"}
        alignItems="center"
        justifyContent="flex-end"
        style={{ marginBottom: "15em", marginTop: "15em" }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography align="center" variant="h4" gutterBottom>
                E-Commerce
              </Typography>
            </Grid>
            <Grid item>
              <img
                src="/assets/ecommerce.svg"
                alt="World outline made of dollar signs"
              />
            </Grid>
          </Grid>
        </Grid>
        <ParagraphContainer item style={{ marginLeft: matchesSM ? 0 : "1em" }}>
          <Typography
            align={matchesSM ? "center" : undefined}
            variant="body1"
            paragraph
          >
            It&#39;s no secret that people like to shop online.
          </Typography>
          <Typography
            align={matchesSM ? "center" : undefined}
            variant="body1"
            paragraph
          >
            In 2017 over $2.3 trillion was spent in e-commerce, and it&#39;s time
            for your slice of that pie.
          </Typography>
        </ParagraphContainer>
      </RowContainer>
      <RowContainer
        item
        container
        direction={matchesSM ? "column" : "row"}
        alignItems="center"
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                align={matchesSM ? "center" : undefined}
                variant="h4"
                gutterBottom
              >
                Outreach
              </Typography>
            </Grid>
            <Grid item>
              <img src="/assets/outreach.svg" alt="megaphone" />
            </Grid>
          </Grid>
        </Grid>
        <ParagraphContainer item style={{ marginLeft: matchesSM ? 0 : "1em" }}>
          <Typography
            align={matchesSM ? "center" : undefined}
            variant="body1"
            paragraph
          >
            Draw people in with a dazzling website. Showing off your products
            online is a great way to help customers decide what&#39;s right for them
            before visiting in person.
          </Typography>
        </ParagraphContainer>
      </RowContainer>
      <RowContainer
        item
        container
        direction={matchesSM ? "column" : "row"}
        alignItems="center"
        justifyContent="flex-end"
        style={{ marginTop: "15em", marginBottom: "15em" }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography align="center" variant="h4" gutterBottom>
                Search Engine
                <br />
                Optimization
              </Typography>
            </Grid>
            <Grid item>
              <img
                src="/assets/seo.svg"
                alt="Website standing on winner's podium"
              />
            </Grid>
          </Grid>
        </Grid>
        <ParagraphContainer item style={{ marginLeft: matchesSM ? 0 : "1em" }}>
          <Typography
            align={matchesSM ? "center" : undefined}
            variant="body1"
            paragraph
          >
            How often have you ever been to the second page of Google results?
          </Typography>
          <Typography
            align={matchesSM ? "center" : undefined}
            variant="body1"
            paragraph
          >
            If you&#39;re like us, probably never.
          </Typography>
          <Typography
            align={matchesSM ? "center" : undefined}
            variant="body1"
            paragraph
          >
            Customers don&#39;t go there either, so we make sure your website is
          </Typography>
        </ParagraphContainer>
      </RowContainer>
      <Grid item>
        <CallToAction setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </Grid>
    </Grid>
  );
}

export default Websites;
