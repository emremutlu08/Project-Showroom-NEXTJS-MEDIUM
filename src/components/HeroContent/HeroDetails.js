/* MATERIAL UI */
import Typography from '@material-ui/core/Typography';

export default function HeroDetails({ details }) {
  return (
    <Typography variant="h5" align="center" color="textSecondary" paragraph>
      {details}
    </Typography>
  );
}
