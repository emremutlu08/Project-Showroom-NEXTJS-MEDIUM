import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import LinkNext from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Brightness4Icon from '@material-ui/icons/Brightness4';

// const useStyles = makeStyles((theme) => ({
const useStyles = makeStyles(() => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  darkModeToggle: {
    display: 'flex',
    alignItems: 'center',
  },
}));

export default function AppBarComponent(props: {
  darkMode: any;
  handleDarkMode: any;
}) {
  const { darkMode, handleDarkMode } = props;
  const classes = useStyles();

  return (
    <AppBar position="relative">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" color="inherit" noWrap>
          <LinkNext href="/" passHref>
            <Link color="inherit">PROJECT GALLERY</Link>
          </LinkNext>{' '}
          |{' '}
          <Link
            href="https://www.upwork.com/freelancers/~01386fae15e6d706ad"
            target="_blank"
            color="inherit"
          >
            EMRE MUTLU
          </Link>
        </Typography>

        <div className={classes.darkModeToggle}>
          <Brightness4Icon />
          <Switch
            checked={darkMode}
            onChange={handleDarkMode}
            name="checkedA"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
}
