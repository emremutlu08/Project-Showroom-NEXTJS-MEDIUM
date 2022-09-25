/* REACT */
import { useState } from 'react';

/* MATERIAL UI */
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

/* COMPONENTS */
import DarkModeToggle from './DarkModeToggle';
import AppBarTitle from './AppBarTitle';
import AppBarMenu from './AppBarMenu';
import LoginRegisterButton from './LoginRegisterButton';

const useStyles = makeStyles(() => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

export default function AppBarComponent(props) {
  const { darkMode, handleDarkMode, currentProfileStr, currentUserStr } = props;
  const classes = useStyles();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <AppBar position="relative">
      <Toolbar className={classes.toolbar}>
        <AppBarMenu setOpenMenu={setOpenMenu} openMenu={openMenu} />
        <AppBarTitle
          currentUserStr={currentUserStr}
          currentProfileStr={currentProfileStr}
        />
        <LoginRegisterButton />
        <DarkModeToggle darkMode={darkMode} handleDarkMode={handleDarkMode} />
      </Toolbar>
    </AppBar>
  );
}
