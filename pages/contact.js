import {
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  Grid,
  Snackbar,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { styled, useTheme } from "@mui/system";
import React, { useState } from "react";
import Link from "../src/Link";
import axios from "axios";
import Head from "next/head";

import ButtonArrow from "../src/ui/ButtonArrow";

const StyledBackground = styled(Grid)(({ theme }) => ({
  backgroundImage: 'url("/assets/background.jpg")',
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "60em",
  paddingBottom: "10em",
  [theme.breakpoints.down("md")]: {
    backgroundImage: 'url("/assets/mobileBackground.jpg")',
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
const LearnButton = styled(Button)(({ theme }) => ({
  ...theme.typography.learnButton,
  fontSize: "0.7rem",
  height: 35,
  padding: 5,
  [theme.breakpoints.down("md")]: {
    marginBottom: "2em",
  },
}));

const StyledMessage = styled(TextField)(({ theme }) => ({
  border: `2px solid ${theme.palette.common.arcBlue}`,
  marginTop: "5em",
  borderRadius: 5,
}));
const SendButton = styled(Button)(({ theme }) => ({
  ...theme.typography.estimate,
  borderRadius: 50,
  height: 45,
  width: 245,
  fontSize: "1rem",
  backgroundColor: theme.palette.common.arcOrange,
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
  },
  [theme.breakpoints.down("sm")]: {
    height: 40,
    width: 225,
  },
}));

function Contact(props) {
  const { setValue, setSelectedIndex } = props;
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");

  const [message, setMessage] = useState("");

  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });

  const onChange = (event) => {
    let valid;

    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );
        if (!valid) {
          setEmailHelper("Invalid Email");
        } else {
          setEmailHelper("");
        }
        break;

      case "phone":
        setPhone(event.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          event.target.value
        );
        if (!valid) {
          setPhoneHelper("Invalid Phone");
        } else {
          setPhoneHelper("");
        }

      default:
        break;
    }
  };

  const onConfirm = () => {
    setLoading(true);
    axios
      .post("https://email-service-node-js.herokuapp.com/sendMail", {
        email: email,
        name: name,
        phone: phone,
        message: message,
      })
      .then((response) => {
        console.log("response: ", response.data);
        setLoading(false);
        setOpen(false);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setAlert({
          open: true,
          message: "Message sent successfully",
          backgroundColor: "#4BB543",
        });
      })
      .catch((err) => {
        console.log("got an error: - ", err);
        setLoading(false);
        setAlert({
          open: true,
          message: "Something went wrong, please try again!",
          backgroundColor: "#FF3232",
        });
      });
  };

  const buttonContents = (
    <>
      Send Message
      <img
        src="/assets/send.svg"
        alt="paper airplane"
        style={{ marginLeft: "1em" }}
      />
    </>
  );

  return (
    <Grid container direction="row">
      <Head>
        <title key="title">Contact Us | Arc Development</title>
        <meta
          name="description"
          key="description"
          content="Let us guide you through the custom software design and development process. Send us a message with any of your ideas or questions to get started!"
        />
        <meta
          property="og:title"
          content="Bringing West Coast Technology to the Midwest | Contact Us"
          key="og:title"
        />
        <meta property="og:url" content="arc.com/contact" key="og:url" />
        <link rel="canonical" key="canonical" href="arc.com/contact" />
      </Head>
      <Grid
        item
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        lg={4}
        xl={3}
        style={{
          marginBottom: matchesMD ? "5em" : 0,
          marginTop: matchesSM ? "1em" : matchesMD ? "5em" : 0,
        }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="h1"
                style={{ lineHeight: 1 }}
              >
                Contact Us
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                style={{ color: theme.palette.common.arcBlue }}
              >
                We&#39;re waiting.
              </Typography>
            </Grid>
            <Grid item container style={{ marginTop: "2em" }}>
              <Grid item>
                <img
                  src="/assets/phone.svg"
                  alt="phone"
                  style={{ marginRight: "0.5em", verticalAlign: "bottom" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{
                    color: theme.palette.common.arcBlue,
                    fontSize: "1rem",
                  }}
                >
                  <a
                    style={{ color: "inherit", textDecoration: "none" }}
                    href="tel:555555 5555"
                  >
                    (555) 555-5555
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container style={{ marginBottom: "2em" }}>
              <Grid item>
                <img
                  src="/assets/email.svg"
                  alt="envelope"
                  style={{ marginRight: "0.5em", verticalAlign: "bottom" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{
                    color: theme.palette.common.arcBlue,
                    fontSize: "1rem",
                  }}
                >
                  <a
                    style={{ color: "inherit", textDecoration: "none" }}
                    href="mailto:chetan.bhogade3899@gmail.com"
                  >
                    chetan.bhogade3899@gmail.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container direction="column" style={{ width: "20em" }}>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  variant="standard"
                  label="Name"
                  id="name"
                  fullWidth
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  variant="standard"
                  label="Email"
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                  id="email"
                  fullWidth
                  value={email}
                  onChange={onChange}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  variant="standard"
                  label="Phone"
                  id="phone"
                  error={phoneHelper.length !== 0}
                  helperText={phoneHelper}
                  fullWidth
                  value={phone}
                  onChange={onChange}
                />
              </Grid>
            </Grid>
            <Grid item style={{ width: "20em" }}>
              <StyledMessage
                inputProps={{
                  // disableUnderline: "true",
                  underline: {
                    "&&&:before": {
                      borderBottom: "none",
                    },
                    "&&:after": {
                      borderBottom: "none",
                    },
                  },
                }}
                multiline
                fullWidth
                placeholder="Tell us more about your project"
                rows={10}
                id="message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
            </Grid>
            <Grid
              item
              container
              justifyContent="center"
              style={{ marginTop: "2em" }}
            >
              <SendButton
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  phoneHelper.length !== 0 ||
                  emailHelper.length !== 0 ||
                  phone.length === 0 ||
                  email.length === 0
                }
                variant="contained"
                onClick={() => setOpen(true)}
              >
                {buttonContents}
              </SendButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Dialog
        style={{ zIndex: 1302 }}
        open={open}
        onClose={() => setOpen(false)}
        fullScreen={matchesSM}
        PaperProps={{
          style: {
            paddingTop: matchesXS ? "1em" : "5em",
            paddingBottom: matchesXS ? "1em" : "5em",
            paddingLeft: matchesXS
              ? 0
              : matchesSM
              ? "5em"
              : matchesMD
              ? "15em"
              : "25em",
            paddingRight: matchesXS
              ? 0
              : matchesSM
              ? "5em"
              : matchesMD
              ? "15em"
              : "25em",
          },
        }}
      >
        <DialogContent>
          <Grid item>
            <Typography align="center" variant="h4" gutterBottom>
              Confirm Message
            </Typography>
          </Grid>
          <Grid item style={{ marginBottom: "0.5em" }}>
            <TextField
              variant="standard"
              label="Name"
              id="name"
              fullWidth
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Grid>
          <Grid item style={{ marginBottom: "0.5em" }}>
            <TextField
              variant="standard"
              label="Email"
              error={emailHelper.length !== 0}
              helperText={emailHelper}
              id="email"
              fullWidth
              value={email}
              onChange={onChange}
            />
          </Grid>
          <Grid item style={{ marginBottom: "0.5em" }}>
            <TextField
              variant="standard"
              label="Phone"
              id="phone"
              error={phoneHelper.length !== 0}
              helperText={phoneHelper}
              fullWidth
              value={phone}
              onChange={onChange}
            />
          </Grid>
          <Grid item style={{ width: matchesSM ? "100%" : "20em" }}>
            <StyledMessage
              inputProps={{
                // disableUnderline: "true",
                underline: {
                  "&&&:before": {
                    borderBottom: "none",
                  },
                  "&&:after": {
                    borderBottom: "none",
                  },
                },
              }}
              multiline
              fullWidth
              placeholder="Tell us more about your project"
              rows={10}
              id="message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </Grid>
          <Grid
            item
            container
            direction={matchesSM ? "column" : "row"}
            style={{ marginTop: "2em" }}
            alignItems="center"
          >
            <Grid item>
              <Button
                style={{ fontWight: 300 }}
                color="primary"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <SendButton
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  phoneHelper.length !== 0 ||
                  emailHelper.length !== 0 ||
                  phone.length === 0 ||
                  email.length === 0
                }
                variant="contained"
                onClick={onConfirm}
              >
                {loading ? <CircularProgress size={30} /> : buttonContents}
              </SendButton>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>

      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{
          style: {
            backgroundColor: alert.backgroundColor,
          },
        }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={4000}
      />

      <StyledBackground
        item
        container
        lg={8}
        xl={9}
        direction={matchesMD ? "column" : "row"}
        alignItems="center"
        justifyContent={matchesMD ? "center" : undefined}
      >
        <Grid
          item
          style={{
            marginLeft: matchesMD ? 0 : "3em",
            textAlign: matchesMD ? "center" : "inherit",
          }}
        >
          <Grid container direction="column">
            <Grid item>
              <Typography align={matchesMD ? "center" : undefined} variant="h1">
                Simple Software.
                <br /> Revolutionary Results.
              </Typography>
              <Typography
                variant="subtitle2"
                align={matchesMD ? "center" : undefined}
                style={{ fontSize: "1.5rem" }}
              >
                Take advantage of 21st Century.
              </Typography>
              <Grid
                container
                item
                justifyContent={matchesMD ? "center" : undefined}
              >
                <LearnButton
                  component={Link}
                  href="/revolution"
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
            href="/estimate"
            variant="contained"
            onClick={() => setValue(5)}
          >
            Free Estimate
          </EstimateButton>
        </Grid>
      </StyledBackground>
    </Grid>
  );
}

export default Contact;
