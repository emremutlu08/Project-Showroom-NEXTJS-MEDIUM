/* MATERIAL UI */

// COMPONENTS
import Box from '@material-ui/core/Box';

// STYLES
import { makeStyles } from '@material-ui/core/styles';

/* CUSTOM STYLES */
const useStyles = makeStyles(() => ({
  main: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  fillRest: {
    height: '25vw',
  },
}));

/* MAIN FUNCTION */
export default function CardGalleryItems() {
  const classes = useStyles();

  return (
    <Box className={classes.main}>
      Not ready!
      <div className={classes.fillRest} />
    </Box>
  );
}
