/* MATERIAL UI */

// COMPONENTS
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

/* MAIN FUNCTION */
export default function CardTitle() {
  return (
    <Typography gutterBottom variant="h6" component="h2">
      <Link
        href="https://www.udemy.com/course/the-complete-javascript-course/"
        underline="none"
        target="_blank"
      >
        The Complete JavaScript Course 2021: From Zero to Expert!
      </Link>
    </Typography>
  );
}
