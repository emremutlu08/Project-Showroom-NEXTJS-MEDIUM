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
import Footer from '../src/components/Footer';
import AppBarComponent from '../src/components/AppBarComponent';
import { SessionProvider } from 'next-auth/react';
import { ToastContainer } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';

function MyApp(props) {
  const {
    Component,
    pageProps: { session, ...pageProps },
  } = props;

  const { currentUserStr, currentProfileStr } = pageProps;

  // Theme
  const [darkMode, setDarkMode] = useState(false);
  const theme = darkMode ? darkTheme : lightTheme;

  // Main Classes
  const useStyles = makeStyles(() => ({
    '@global': {
      '*::-webkit-scrollbar': {
        width: '10px',
      },
      '*::-webkit-scrollbar-track': {
        background: '#808080',
      },
      '*::-webkit-scrollbar-thumb': {
        background: '#b2b2b2',
      },
      '*::-webkit-scrollbar-thumb:hover': {
        background: '#d8d8d8',
      },
    },
    main: {
      backgroundColor: theme.palette.background.default,
    },
  }));
  const classes = useStyles();

  // Dark Mode Handler
  const handleDarkMode = () => setDarkMode(!darkMode);

  return (
    <SessionProvider session={session}>
      <Head>
        <title>Emre MUTLU - SHOWROOM</title>
      </Head>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <main className={classes.main}>
          <AppBarComponent
            darkMode={darkMode}
            handleDarkMode={handleDarkMode}
            currentUserStr={currentUserStr}
            currentProfileStr={currentProfileStr}
          />
          <Component {...pageProps} />
          <Footer />
        </main>
      </ThemeProvider>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </SessionProvider>
  );
}

export default MyApp;
