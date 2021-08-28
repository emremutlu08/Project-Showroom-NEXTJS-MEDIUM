/* MATERIAL UI */

// COMPONENTS
import Box from '@material-ui/core/Box';

// STYLES
import { makeStyles } from '@material-ui/core/styles';

/* COMPONENTS */
import FirebaseAuth from '../../src/components/firebaseComponents/auth/FirebaseAuth';

/* CUSTOM STYLES */
const useStyles = makeStyles(() => ({
  main: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  fillRest: {
    height: '30vw',
  },
}));

/* MAIN FUNCTION */
export default function CardGalleryItems() {
  const classes = useStyles();

  return (
    <Box className={classes.main}>
      <FirebaseAuth />
      <div className={classes.fillRest} />
    </Box>
  );
}
