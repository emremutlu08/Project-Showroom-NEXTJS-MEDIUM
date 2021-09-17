/* MATERIAL UI */

// COMPONENTS
import Box from '@material-ui/core/Box';

// STYLES
import { makeStyles } from '@material-ui/core/styles';

/* COMPONENTS */
import AddProjectForm from '../../src/components/add-project/AddProjectForm';

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
export default function AddProjectPage() {
  const classes = useStyles();

  return (
    <Box className={classes.main}>
      <AddProjectForm />
      <div className={classes.fillRest} />
    </Box>
  );
}
