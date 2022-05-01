import * as React from "react";
import ReactGA from "react-ga";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import Theme from "../src/ui/Theme";
import createEmotionCache from "../src/createEmotionCache";
import Header from "../src/ui/Header";
import Footer from "../src/ui/Footer";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

ReactGA.initialize("G-LC9KGMRY98");

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [value, setValue] = React.useState(0);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={Theme}>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Component
          {...pageProps}
          setValue={setValue}
          setSelectedIndex={setSelectedIndex}
        />
        <Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
