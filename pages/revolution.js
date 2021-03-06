import { Grid, Typography, useMediaQuery } from "@mui/material";
import { styled, useTheme } from "@mui/system";
import React from "react";
import Lottie from "react-lottie";
import Head from "next/head";

import technologyAnimation from "../src/animations/technologyAnimation/data.json";

const RowContainer = styled(Grid)(({ theme }) => ({
  paddingLeft: "5em",
  paddingRight: "5em",
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "1.5em",
    paddingRight: "1.5em",
  },
}));

function Revolution(props) {
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: technologyAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid container direction="column">
      <Head>
        <title key="title">
          The Revolution - Cutting-Edge Software | Arc Development
        </title>
        <meta
          name="description"
          key="description"
          content="Visionary insights, coupled with cutting-edge technology, is a recipe for revolution. Get a free online estimate instantly!"
        />
        <meta
          property="og:title"
          content="Bringing West Coast Technology to the Midwest | The Revolution "
          key="og:title"
        />
        <meta property="og:url" content="arc.com/revolution" key="og:url" />
        <link rel="canonical" key="canonical" href="arc.com/revolution" />
      </Head>
      <RowContainer item style={{ marginTop: "2em" }}>
        <Typography
          align={matchesMD ? "center" : undefined}
          variant="h1"
          style={{ fontFamily: "Pacifico" }}
        >
          The Revolution
        </Typography>
      </RowContainer>
      <RowContainer
        item
        container
        alignItems="center"
        direction={matchesMD ? "column" : "row"}
        style={{ marginTop: "5em" }}
      >
        <Grid item lg>
          <img
            src="/assets/vision.svg"
            alt="mountain through binoculars"
            style={{
              maxWidth: matchesSM ? 300 : "40em",
              marginRight: matchesMD ? 0 : "5em",
              marginBottom: matchesMD ? "5em" : 0,
            }}
          />
        </Grid>
        <Grid item container direction="column" lg style={{ maxWidth: "40em" }}>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : "right"}
              variant="h4"
              gutterBottom
            >
              Vision
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : "right"}
              variant="body1"
              paragraph
            >
              The rise of computers, and subsequently the Internet, has
              completely altered every aspect of human life. This has increased
              our comfort, broadened our connections, and reshaped how we view
              the world.
            </Typography>
            <Typography
              align={matchesMD ? "center" : "right"}
              variant="body1"
              paragraph
            >
              What once was confined to huge rooms and teams of engineers now
              resides in every single one of our hands. Harnessing this
              unlimited potential by using it to solve problems and better lives
              is at the heart of everything we do.
            </Typography>
            <Typography
              align={matchesMD ? "center" : "right"}
              variant="body1"
              paragraph
            >
              We want to help businesses capitalize on the latest and greatest
              technology. The best way to predict the future is to be the one
              building it, and we want to help guide the world into this next
              chapter of technological expansion, exploration, and innovation.
            </Typography>
            <Typography
              align={matchesMD ? "center" : "right"}
              variant="body1"
              paragraph
            >
              By holding ourselves to rigorous standards and pristine quality,
              we can ensure you have the absolute best tools necessary to thrive
              in this new frontier
            </Typography>
            <Typography
              align={matchesMD ? "center" : "right"}
              variant="body1"
              paragraph
            >
              We see a future where every individual has personalized software
              custom tailored to their lifestyle, culture, and interests,
              helping them
            </Typography>
          </Grid>
        </Grid>
      </RowContainer>
      <RowContainer
        item
        container
        alignItems="center"
        direction={matchesMD ? "column" : "row"}
        style={{ marginTop: "10em", marginBottom: "10em" }}
      >
        <Grid item container direction="column" lg style={{ maxWidth: "40em" }}>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="h4"
              gutterBottom
            >
              Technology
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              In 2013, Facebook invented a new way of building websites. This
              new system, React.js, completely revolutionizes the process and
              practice of website development.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Instead of chaining together long individual pages, like
              traditional websites, React websites are built with little chunks
              of code called components. These components are faster, easier to
              maintain, and are easily reused and customized, each serving a
              singular purpose.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Two years later they shocked the world by releasing a similar
              system, React Native, for producing iOS and Android apps. Instead
              of having to master two completely separate development platforms,
              you can leverage the knowledge you already possessed from building
              websites and reapply it directly! This was a huge leap forward.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              This technology is now being used by companies like AirBnB,
              Microsoft, Netflix, Pinterest, Skype, Tesla, UberEats, and when
              Facebook purchased Instagram large portions of it were even
              rebuilt using React.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              Developers have since built on top of these systems by automating
              project setup and deployment, allowing creators to focus as much
              as possible on their work itself.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              These technical advancements translate into savings by
              significantly reducing the workload and streamlining the workflow
              for developing new pieces of software, while also lowering the
              barrier to entry for mobile app development.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              paragraph
            >
              This puts personalization in your pocket ??? faster, better, and
              more affordable than ever before.
            </Typography>
          </Grid>
          <Grid
            item
            container
            justifyContent={matchesMD ? "center" : "flex-end"}
            lg
          >
            <Lottie
              options={defaultOptions}
              style={{ maxWidth: "40em", margin: 0 }}
            />
          </Grid>
        </Grid>
      </RowContainer>
      <RowContainer item container justifyContent="center" direction="row">
        <Grid item>
          <Typography variant="h4" gutterBottom>
            Process
          </Typography>
        </Grid>
      </RowContainer>
      <RowContainer
        item
        container
        justifyContent="center"
        direction={matchesMD ? "column" : "row"}
        style={{ backgroundColor: "#B3B3B3", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchesMD ? "center" : undefined}
          lg
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesMD ? "center" : undefined}
              style={{ color: "#000", marginTop: "5em" }}
            >
              Consultation
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              style={{ color: "#FFF", maxWidth: "20em" }}
              paragraph
            >
              Our process begins the moment you realize you need a piece of
              technology for your business. Whether you already have an idea for
              where to start and what to do, or if you just know you want to
              step things up, our initial consultation will help you examine
              your business holistically to find the best solutions.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              style={{ color: "#FFF", maxWidth: "20em" }}
              paragraph
            >
              Detailed notes will be taken on your requirements and constraints,
              while taking care to identify other potential areas for
              consideration.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              style={{ color: "#FFF", maxWidth: "20em" }}
              paragraph
            >
              Cutting-edge advancements in machine learning like object
              detection and natural language processing allow computers to do
              things previously unimaginable, and our expertise and intuition
              will help usher you into this new future of possibilities.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src="/assets/consultationIcon.svg"
            alt="handshake"
            width="100%"
            style={{ maxWidth: 700 }}
          />
        </Grid>
      </RowContainer>
      <RowContainer
        item
        container
        justifyContent="center"
        direction={matchesMD ? "column" : "row"}
        style={{ backgroundColor: "#FF7373", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchesMD ? "center" : undefined}
          lg
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesMD ? "center" : undefined}
              style={{ color: "#000", marginTop: "5em" }}
            >
              Mockup
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              style={{ color: "#FFF", maxWidth: "20em" }}
              paragraph
            >
              After we settle on the best path forward and decide on a solution
              to pursue, details like the cost and timeline will be finalized.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              style={{ color: "#FFF", maxWidth: "20em" }}
              paragraph
            >
              Then it&#39;s time for us to start on your minimum viable product.
              That&#39;s just a fancy term for a mockup, which doesn&#39;t
              include colors, images, or any other polished design elements, but
              captures the essential layout structure and functionality.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              style={{ color: "#FFF", maxWidth: "20em" }}
              paragraph
            >
              This helps us understand and refine the solution itself before
              getting distracted by specifics and looks.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src="/assets/mockupIcon.svg"
            style={{ maxWidth: 1000 }}
            width="100%"
            alt="basic website design outline"
          />
        </Grid>
      </RowContainer>
      <RowContainer
        item
        container
        justifyContent="center"
        direction={matchesMD ? "column" : "row"}
        style={{ backgroundColor: "#39D54A", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchesMD ? "center" : undefined}
          lg
        >
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
            >
              Review
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              style={{ color: "#FFF", maxWidth: "20em" }}
              paragraph
            >
              Before moving any farther we come back to you with our progress.
              This gives you the freedom to discuss any changes you may want or
              any ideas you may have come up with before any heavy lifting has
              been done.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              style={{ color: "#FFF", maxWidth: "20em" }}
              paragraph
            >
              We give you an interactive demonstration of the mockups,
              thoroughly explaining the thought process that went into each
              screen and every anticipated feature.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              style={{ color: "#FFF", maxWidth: "20em" }}
              paragraph
            >
              Once you???re completely satisfied with the vision for our solution
              we get down to the nitty gritty, fine details of design.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src="/assets/reviewIcon.svg"
            width="100%"
            alt="magnifying glass"
            style={{ maxWidth: "40em" }}
          />
        </Grid>
      </RowContainer>
      <RowContainer
        item
        container
        justifyContent="center"
        direction={matchesMD ? "column" : "row"}
        style={{ backgroundColor: "#A67C52", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchesMD ? "center" : undefined}
          lg
        >
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
            >
              Design
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              style={{ color: "#FFF", maxWidth: "20em" }}
              paragraph
            >
              Using the mockups and notes taken during the consultation as
              guides, we will start ironing out what the final product will look
              like. This also involves using any brand material like fonts,
              colors, and logos to extend the experience you???re already familiar
              with.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              style={{ color: "#FFF", maxWidth: "20em" }}
              paragraph
            >
              No aspect is superfluous, and care will be taken with every
              decision.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src="/assets/designIcon.svg"
            style={{ maxWidth: 1000 }}
            width="100%"
            alt="paintbrush leaving stroke of paint"
          />
        </Grid>
      </RowContainer>
      <RowContainer
        item
        container
        justifyContent="center"
        direction={matchesMD ? "column" : "row"}
        style={{ backgroundColor: "#39D54A", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchesMD ? "center" : undefined}
          lg
        >
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
            >
              Review
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              style={{ color: "#FFF", maxWidth: "20em" }}
              paragraph
            >
              A second round of review is essential to our goal of creating
              exactly what you want, exactly how you want it.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              style={{ color: "#FFF", maxWidth: "20em" }}
              paragraph
            >
              This time we&#39;ll be going over the finalized designs in another
              fully interactive demonstration. Again this gives you an
              opportunity to tweak things and make sure we get everything right
              the first time.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src="/assets/reviewIcon.svg"
            alt="magnifying glass"
            width="100%"
            style={{ maxWidth: "40em" }}
          />
        </Grid>
      </RowContainer>
      <RowContainer
        item
        container
        justifyContent="center"
        direction={matchesMD ? "column" : "row"}
        style={{ backgroundColor: "#FBB03B", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchesMD ? "center" : undefined}
          lg
        >
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
            >
              Build
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              style={{ color: "#FFF", maxWidth: "20em" }}
              paragraph
            >
              Here&#39;s where we get down to business.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              style={{ color: "#FFF", maxWidth: "20em" }}
              paragraph
            >
              Engineering begins after your approval on the final designs. We
              start by scaffolding out the project on a high level, prioritizing
              some areas over others.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              style={{ color: "#FFF", maxWidth: "20em" }}
              paragraph
            >
              Each area is then developed in order of importance until ready to
              be connected to the next piece.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              style={{ color: "#FFF", maxWidth: "20em" }}
              paragraph
            >
              Typically the backend, behind the scenes operations are completed
              first. Once all the services are in place we can then create the
              front end, user side of things.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              style={{ color: "#FFF", maxWidth: "20em" }}
              paragraph
            >
              Finishing the application doesn&#39;t mean we&#39;re done though,
              because we use extensive testing to guarantee compatibility with
              all intended devices.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              style={{ color: "#FFF", maxWidth: "20em" }}
              paragraph
            >
              Only after our rigorous examinations will we accept a product as
              finished, then pushing it through the production pipeline. This
              produces an optimized, compressed, consumer version of the code
              and assets ready for deployment.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src="/assets/buildIcon.svg"
            style={{ maxWidth: matchesMD ? 700 : 1000 }}
            width="100%"
            alt="building construction site"
          />
        </Grid>
      </RowContainer>
      <RowContainer
        item
        container
        justifyContent="center"
        direction={matchesMD ? "column" : "row"}
        style={{ backgroundColor: "#C1272D", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchesMD ? "center" : undefined}
          lg
        >
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
            >
              Launch
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              style={{ color: "#FFF", maxWidth: "20em" }}
              paragraph
            >
              The moment we&#39;ve all been waiting for.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              style={{ color: "#FFF", maxWidth: "20em" }}
              paragraph
            >
              When construction comes to a close you&#39;re the first one to
              know. We&#39;ll give our final demonstration to show off your
              shiny new software in the wild so you know exactly how it will
              look to your users.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              style={{ color: "#FFF", maxWidth: "20em" }}
              paragraph
            >
              When you say the word, we press the button and launch your project
              out to the public. We&#39;re there to ensure everything goes to
              plan so you can start reaping the rewards of your technological
              investment immediately.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src="/assets/launchIcon.svg"
            style={{ maxWidth: 200 }}
            width="100%"
            alt="rocket"
          />
        </Grid>
      </RowContainer>
      <RowContainer
        item
        container
        justifyContent="center"
        direction={matchesMD ? "column" : "row"}
        style={{ backgroundColor: "#8E45CE", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchesMD ? "center" : undefined}
          lg
        >
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
            >
              Maintain
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              style={{ color: "#FFF", maxWidth: "20em" }}
              paragraph
            >
              Our work doesn&#39;t end there.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              style={{ color: "#FFF", maxWidth: "20em" }}
              paragraph
            >
              After a successful launch we keep in close contact to listen to
              feedback and hear how the project is being received.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              style={{ color: "#FFF", maxWidth: "20em" }}
              paragraph
            >
              From there on out we make sure your application is kept up to date
              and taking advantage of the best features and practices available.
              When new developments arise or new techniques are discovered in
              future projects, we will implement those advancements in your
              project as part of our routine maintenance.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src="/assets/maintainIcon.svg"
            style={{ maxWidth: 500 }}
            width="100%"
            alt="wrench tightening bolts"
          />
        </Grid>
      </RowContainer>
      <RowContainer
        item
        container
        justifyContent="center"
        direction={matchesMD ? "column" : "row"}
        style={{ backgroundColor: "#29ADE2", height: "90em" }}
      >
        <Grid
          item
          container
          direction="column"
          alignItems={matchesMD ? "center" : undefined}
          lg
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesMD ? "center" : undefined}
              style={{ color: "#000", marginTop: "5em" }}
            >
              Iterate
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              style={{ color: "#FFF", maxWidth: "20em" }}
              paragraph
            >
              The cycle repeats whenever you come up with a new idea for
              extending your current project, or come up with a brand new system
              entirely.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              style={{ color: "#FFF", maxWidth: "20em" }}
              paragraph
            >
              By planning for future features and changes we can build and
              evolve your application over time. As new use cases and customer
              needs develop we can respond with continuous integration of new
              content.
            </Typography>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body1"
              style={{ color: "#FFF", maxWidth: "20em" }}
              paragraph
            >
              Our iterative process will keep you current and competitive,
              allowing you to quickly implement changes instead of waiting
              months for a single update.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src="/assets/iterateIcon.svg"
            alt="falling dominoes"
            width="100%"
          />
        </Grid>
      </RowContainer>
    </Grid>
  );
}

export default Revolution;
