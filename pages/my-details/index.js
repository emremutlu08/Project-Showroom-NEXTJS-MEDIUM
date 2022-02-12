/* MATERIAL UI */

// COMPONENTS
import Box from '@material-ui/core/Box';

// STYLES
import { makeStyles } from '@material-ui/core/styles';

/* COMPONENTS */
import MyDetailsForm from './../../src/components/my-details/MyDetailsForm';

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
export default function MyDetailsPage() {
  const classes = useStyles();

  return (
    <Box className={classes.main}>
      <MyDetailsForm />
      <div className={classes.fillRest} />
    </Box>
  );
}
