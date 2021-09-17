/* MATERIAL UI */

// COMPONENTS
import Typography from '@material-ui/core/Typography';

/* MAIN FUNCTION */
export default function CardTitle({ title }: any) {
  return (
    <Typography gutterBottom variant="h6" component="h2">
      {title}
    </Typography>
  );
}
