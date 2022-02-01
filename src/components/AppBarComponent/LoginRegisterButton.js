import { Button } from '@material-ui/core';
import React from 'react';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function LoginRegisterButton() {
  const { status } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <>
      {status === 'unauthenticated' ? (
        <>
          <Button variant="contained" onClick={() => signIn()}>
            <LoginIcon />
            <Box sx={{ margin: '0 4px' }} />
            <Typography>Login / Register</Typography>
          </Button>
        </>
      ) : (
        <>
          <Button variant="contained" onClick={() => signOut()}>
            <LogoutIcon />
            <Box sx={{ margin: '0 4px' }} />
            <Typography>Logout</Typography>
          </Button>
        </>
      )}
    </>
  );
}
