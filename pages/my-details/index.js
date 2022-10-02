/* MATERIAL UI */
import React from 'react';

// COMPONENTS
import Box from '@material-ui/core/Box';

// STYLES
import { makeStyles } from '@material-ui/core/styles';

/* COMPONENTS */
import MyDetailsForm from './../../src/components/my-details/MyDetailsForm';
import jwt from 'jsonwebtoken';
import Users from '../../models/Users';

import { getCookie, deleteCookie } from 'cookies-next';
import Profile from '../../models/Profiles';
import connect from '../../lib/database';

/* CUSTOM STYLES */
const useStyles = makeStyles(() => ({
  main: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  fillRest: {
    height: '25vw',
  },
}));

/* MAIN FUNCTION */
export default function MyDetailsPage(props) {
  const classes = useStyles();

  return (
    <Box className={classes.main}>
      <MyDetailsForm props={props} />
      <div className={classes.fillRest} />
    </Box>
  );
}

export async function getServerSideProps({ req, res }) {
  try {
    await connect();

    // check cookie
    const token = getCookie('token', { req, res });
    // if (!token)
    //   return {
    //     redirect: {
    //       destination: '/',
    //     },
    //   };

    const verified = jwt.decode(token);
    const currentUser = await Users.findOne({ _id: verified.id });
    const currentProfile = await Profile.findOne({ creatorId: verified.id });

    // if (!currentUser)
    //   return {
    //     redirect: {
    //       destination: '/',
    //     },
    //   };
    return {
      props: {
        creatorId: verified.id,
        creatorEmail: currentUser.email,
        creatorDisplayName: currentUser.displayName,
        username: currentProfile?.username || null,
        myDetails: currentProfile?.myDetails || null,
        giveNameToButton: currentProfile?.giveNameToButton || null,
        title: currentProfile?.title || null,
        addOneUrl: currentProfile?.addOneUrl || null,
        creatorDefaultUserName: currentUser.defaultUserName,
      },
    };
  } catch (err) {
    deleteCookie('token', { req, res });
    return {
      redirect: {
        destination: '/',
      },
    };
  }
}
