/* MATERIAL UI */
// COMPONENTS
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

// STYLES
import { makeStyles } from '@material-ui/core/styles';

/* CUSTOM STYLES */
const useStyles = makeStyles(() => ({
  main: {
    height: '70vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fillRest: {
    height: '70vh',
  },
}));

/* MAIN FUNCTION */
export default function CardGalleryItems() {
  const classes = useStyles();

  return (
    <Box className={classes.main}>
      <Typography gutterBottom variant="h3" component="h3" color="textPrimary">
        Welcome
      </Typography>
      <Typography
        gutterBottom
        variant="h6"
        component="h6"
        color="textSecondary"
      >
        Emre MUTLU - Ercan AKALAR
      </Typography>
    </Box>
  );
}
