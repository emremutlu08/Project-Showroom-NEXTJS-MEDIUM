/* MATERIAL UI */
import React from 'react';

// COMPONENTS
import Box from '@material-ui/core/Box';

// STYLES
import { makeStyles } from '@material-ui/core/styles';

/* COMPONENTS */
import AddProjectForm from '../../src/components/add-project/AddProjectForm';

import { getCookie, deleteCookie } from 'cookies-next';
import jwt from 'jsonwebtoken';
import Users from '../../models/Users';
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
export default function AddProjectPage(props) {
  const classes = useStyles();

  return (
    <Box className={classes.main}>
      <AddProjectForm props={props} />
      <div className={classes.fillRest} />
    </Box>
  );
}

export async function getServerSideProps({ req, res }) {
  try {
    // connect db
    await connect();
    // check cookie
    const token = getCookie('token', { req, res });
    // if (!token)
    //   return {
    //     redirect: {
    //       destination: '/',
    //     },
    //   };

    const verified = await jwt.decode(token);
    const obj = await Users.findOne({ _id: verified.id });
    // if (!obj)
    //   return {
    //     redirect: {
    //       destination: '/',
    //     },
    //   };
    return {
      props: {
        creatorId: verified.id,
        creatorEmail: obj.email,
        creatorDisplayName: obj.displayName,
        creatorDefaultUserName: obj.defaultUserName,
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
