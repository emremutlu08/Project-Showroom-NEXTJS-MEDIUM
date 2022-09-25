import { Button } from '@material-ui/core';
import React from 'react';
import LoginIcon from '@mui/icons-material/Login';

import LogoutIcon from '@mui/icons-material/Logout';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useRouter } from 'next/router';
import { deleteCookie, getCookie } from 'cookies-next';

export default function LoginRegisterButton() {
  const router = useRouter();

  const logout = () => {
    deleteCookie('token');
    router.replace('/');
  };

  const cookieExists = getCookie('token');

  return (
    <>
      {!cookieExists ? (
        <>
          <Button href="/api/google" variant="contained">
            <LoginIcon />
            <Box sx={{ margin: '0 4px' }} />
            <Typography>Login / Register</Typography>
          </Button>
        </>
      ) : (
        <>
          <Button variant="contained" onClick={logout}>
            <LogoutIcon />
            <Box sx={{ margin: '0 4px' }} />
            <Typography>Logout</Typography>
          </Button>
        </>
      )}
    </>
  );
}

export async function getServerSideProps({ req, res }) {
  try {
    const cookieExists = getCookie('token', { req, res });

    if (cookieExists) return { redirect: { destination: '/' } };
    return { props: {} };
  } catch (err) {
    return { props: {} };
  }
}
