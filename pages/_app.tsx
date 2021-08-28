/* REACT */
import React, { useState } from 'react';

/* NEXT.JS */
import Head from 'next/head';

/* MATERIAL UI */
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core';

/* COMPONENTS */
import { lightTheme, darkTheme } from '../src/components/ui/Theme';
import Footer from './../src/components/Footer';
import AppBarComponent from './../src/components/AppBarComponent';

/* PROPS INTERFACE */
export interface MyAppProps<P extends object = {}> {
  Component: React.ComponentType;
  pageProps: P;
}

function MyApp({ Component, pageProps }: MyAppProps) {
  // Theme
  const [darkMode, setDarkMode] = useState(false);
  const theme = darkMode ? darkTheme : lightTheme;

  // Main Classes
  const useStyles = makeStyles(() => ({
    main: {
      backgroundColor: theme.palette.background.default,
    },
  }));
  const classes = useStyles();

  // Dark Mode Handler
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <Head>
        <title>Emre MUTLU - SHOWROOM</title>
      </Head>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <main className={classes.main}>
          <AppBarComponent
            darkMode={darkMode}
            handleDarkMode={handleDarkMode}
          />
          <Component {...pageProps} />
          <Footer />
        </main>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
