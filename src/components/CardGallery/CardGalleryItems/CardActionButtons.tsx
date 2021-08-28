/* MATERIAL UI */

// COMPONENTS
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';

/* MAIN FUNCTION */
export default function CardActionButtons() {
  return (
    <CardActions>
      <Button
        size="small"
        color="primary"
        href="https://udemy-certificate.s3.amazonaws.com/image/UC-ee77a79b-0578-48ee-9a75-e5c63e5453b4.jpg"
        target="_blank"
      >
        View Certificate
      </Button>
      <Button
        size="small"
        color="primary"
        href="https://github.com/emremutlu08?tab=repositories"
        target="_blank"
      >
        View Codes On My GitHub
      </Button>
    </CardActions>
  );
}
