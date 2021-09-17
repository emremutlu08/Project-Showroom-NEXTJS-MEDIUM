/* MATERIAL UI */

// COMPONENTS
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

/* MAIN FUNCTION */
export default function CardTitle({ title }: any) {
  return (
    <Typography gutterBottom variant="h6" component="h2">
      <Link
        href="https://www.udemy.com/course/the-complete-javascript-course/"
        underline="none"
        target="_blank"
      >
        {title}
      </Link>
    </Typography>
  );
}
