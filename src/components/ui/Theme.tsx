import { createTheme } from '@material-ui/core/styles';

const darkPrimary = '#9370DB';
const darkSecondary = '#034068';

export const lightTheme = createTheme({
  palette: {
    type: 'light',
  },
});

export const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: darkPrimary,
    },
    secondary: {
      main: darkSecondary,
    },
  },
});
