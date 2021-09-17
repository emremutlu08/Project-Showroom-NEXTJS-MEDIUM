/* MATERIAL UI */

// COMPONENTS
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';

// STYLES
import { makeStyles } from '@material-ui/core/styles';

/* CUSTOM STYLES */
const useStyles = makeStyles(() => ({
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

/* MAIN FUNCTION */
export default function CardActionButtons({
  leftTitle = '',
  leftUrl = '',
  rightTitle = '',
  rightUrl = '',
}: any) {
  const classes = useStyles();
  return (
    <CardActions className={classes.actions}>
      {leftUrl && (
        <Button size="small" color="primary" href={leftUrl} target="_blank">
          {leftTitle}
        </Button>
      )}
      {rightUrl && (
        <Button size="small" color="primary" href={rightUrl} target="_blank">
          {rightTitle}
        </Button>
      )}
    </CardActions>
  );
}
