/* MATERIAL UI */
import Typography from '@material-ui/core/Typography';

export interface HeroNameProps {
  fullname: String;
}

export default function HeroName({ fullname }: HeroNameProps) {
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
