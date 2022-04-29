import { Avatar, Grid, Typography, useMediaQuery } from "@mui/material";
import { styled, useTheme } from "@mui/system";
import Head from "next/head";
import React from "react";
import CallToAction from "../src/ui/CallToAction";

const MissionStatement = styled(Typography)(({ theme }) => ({
  fontStyle: "italic",
  fontWeight: 300,
  fontSize: "1.5rem",
  maxWidth: "50em",
  lineHeight: 1.4,
}));

const RowContainer = styled(Grid)(({ theme }) => ({
  paddingLeft: "5em",
  paddingRight: "5em",
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "1.5em",
    paddingRight: "1.5em",
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  height: "25em",
  width: "25em",
  [theme.breakpoints.down("sm")]: {
    height: "20em",
    width: "20em",
    maxHeight: 300,
    maxWidth: 300,
  },
}));

function About(props) {
  const { setValue, setSelectedIndex } = props;
  const theme = useTheme();
  const matchesLG = useMediaQuery(theme.breakpoints.up("lg"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction="column">
      <Head>
        <title key="title">About Us - History & Team | Arc Development</title>
        <meta
          name="description"
          key="description"
          content="We provide the fastest, most modern, affordable, and aesthetic software design and development services in the Midwest. Get a free online estimate now!"
        />
        <meta
          property="og:title"
          content="Bringing West Coast Technology to the Midwest | About Us"
          key="og:title"
        />
        <meta property="og:url" content="arc.com/about" key="og:url" />
        <link rel="canonical" key="canonical" href="arc.com/about" />
      </Head>
      <RowContainer item style={{ marginTop: matchesMD ? "1em" : "2em" }}>
        <Typography variant="h1" align={matchesMD ? "center" : undefined}>
          About Us
        </Typography>
      </RowContainer>
      <RowContainer
        item
        container
        justifyContent="center"
        style={{ marginTop: "3em" }}
      >
        <MissionStatement variant="h4" align="center">
          Whether it be person to person, business to consumer, or an individual
          to their interests, technology is meant to bring us closer to what we
          care about in the best way possible. Arc Development will use that
          principle to provide fast, modern, inexpensive, and aesthetic software
          to the Midwest and beyond.
        </MissionStatement>
      </RowContainer>
      <RowContainer
        item
        container
        justifyContent="space-around"
        direction={matchesMD ? "column" : "row"}
        alignItems={matchesMD ? "center" : undefined}
        style={{ marginTop: "10em", marginBottom: "10em" }}
      >
        <Grid item>
          <Grid
            item
            container
            direction="column"
            lg
            style={{ maxWidth: "35em" }}
          >
            <Grid item>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="h4"
                gutterBottom
              >
                History
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : undefined}
                style={{ fontWeight: 700, fontStyle: "italic" }}
              >
                We&#39;re the new kid on the block
              </Typography>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="body1"
                paragraph
              >
                Founded in 2019, we&#39;re ready to get our hands on the world&#39;s
                business problems.
              </Typography>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="body1"
                paragraph
              >
                It all started with one question: Why aren&#39;t all businesses
                using available technology? There are many different answers to
                that question: economic barriers, social barriers, educational
                barriers, and sometimes institutional barriers.
              </Typography>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="body1"
                paragraph
              >
                We aim to be a powerful force in overcoming these obstacles.
                Recent developments in software engineering and computing power,
                compounded by the proliferation of smart phones, has opened up
                infinite worlds of possibility. Things that have always been
                done by hand can now be done digitally and automatically, and
                completely new methods of interaction are created daily. Taking
                full advantage of these advancements is the name of the game.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item lg justifyContent="center">
            <img
              src="/assets/history.svg"
              style={{ maxHeight: matchesMD ? 200 : "22em" }}
              alt="quill pen sitting on the page"
            />
          </Grid>
        </Grid>
      </RowContainer>
      <RowContainer
        item
        container
        alignItems="center"
        direction="column"
        style={{ marginBottom: "15em" }}
      >
        <Grid item>
          <Typography align="center" variant="h4" gutterBottom>
            Team
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" align="center" paragraph>
            Chetan Bhogade, Founder
          </Typography>
          <Typography variant="body1" paragraph align="center">
            I started coding when I was 18 years old.
          </Typography>
        </Grid>
        <Grid item>
          <StyledAvatar alt="Founder" src="/assets/chetan.jpeg" />
        </Grid>
        <Grid item container justifyContent={matchesMD ? "center" : undefined}>
          {matchesLG ? null : (
            <Grid item lg style={{ maxWidth: "45em", padding: "1.25em" }}>
              <Typography variant="body1" align="center" paragraph>
                I taught myself basic coding from a library book in third grade,
                and ever since then my passion has solely been set on learning —
                learning about computers, learning mathematics and philosophy,
                studying design, always just learning.
              </Typography>
              <Typography variant="body1" align="center" paragraph>
                Now I&#39;m ready to apply everything I&#39;ve learned, and to help
                others with the
              </Typography>
            </Grid>
          )}
          <Grid
            item
            container
            direction="column"
            alignItems={matchesMD ? "center" : undefined}
            style={{
              marginBottom: matchesMD ? "2.5em" : 0,
            }}
            lg
          >
            <Grid item>
              <img
                src="/assets/yearbook.svg"
                alt="yearbook page about founder"
                style={{ maxWidth: matchesMD ? 300 : undefined }}
              />
            </Grid>
            <Grid item>
              <Typography variant="caption">
                a page from my Sophomore yearbook
              </Typography>
            </Grid>
          </Grid>
          {matchesMD ? null : (
            <Grid item lg style={{ maxWidth: "45em", padding: "1.25em" }}>
              <Typography variant="body1" align="center" paragraph>
                I taught myself basic coding from a library book in third grade,
                and ever since then my passion has solely been set on learning —
                learning about computers, learning mathematics and philosophy,
                studying design, always just learning.
              </Typography>
              <Typography variant="body1" align="center" paragraph>
                Now I&#39;m ready to apply everything I&#39;ve learned, and to help
                others with the
              </Typography>
            </Grid>
          )}
          <Grid
            item
            container
            direction="column"
            alignItems={matchesMD ? "center" : "flex-end"}
            lg
          >
            <Grid item>
              <img
                src="/assets/puppy.svg"
                style={{ maxWidth: matchesMD ? 300 : undefined }}
                alt="gry spotted puppy"
              />
            </Grid>
            <Grid item>
              <Typography variant="caption">
                my miniature dapple dachshund, Sterling
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </RowContainer>
      <Grid item>
        <CallToAction setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </Grid>
    </Grid>
  );
}

export default About;
