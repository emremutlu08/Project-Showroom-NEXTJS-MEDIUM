import React from 'react';
import { Divider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(6),
    backgroundColor: theme.palette.background.paper,
    minHeight: '100%',
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link
        href="https://www.linkedin.com/in/emremutlu8/"
        target="_blank"
        color="inherit"
      >
        PROJECT GALLERY By Emre MUTLU
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  const classes = useStyles();
  return (
    <footer>
      <Divider />
      <div className={classes.footer}>
        <Typography
          variant="h6"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          <Link
            href="https://www.upwork.com/freelancers/~01386fae15e6d706ad"
            target="_blank"
            // color="inherit"
          >
            PROJECT GALLERY | Emre MUTLU
          </Link>
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          I can build your dream apps with React and React Native!
        </Typography>
        <Copyright />
      </div>
    </footer>
  );
}
