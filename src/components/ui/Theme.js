import { createTheme } from '@material-ui/core/styles';

const darkPrimary = '#5860f5';
const darkSecondary = '#034068';

export const lightTheme = createTheme({
  palette: {
    type: 'light',
  },
});

export const darkTheme = createTheme({
  palette: {
    type: 'dark',
    // background: {
    //   default: '#aaa',
    // },
    primary: {
      main: darkPrimary,
    },
    secondary: {
      main: darkSecondary,
    },
  },
});
