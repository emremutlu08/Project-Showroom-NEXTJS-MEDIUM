/* MATERIAL UI */
import Typography from '@material-ui/core/Typography';

export default function HeroName({ fullname }) {
  return (
    <Typography
      component="h1"
      variant="h2"
      align="center"
      color="textPrimary"
      gutterBottom
    >
      {fullname}
    </Typography>
  );
}
