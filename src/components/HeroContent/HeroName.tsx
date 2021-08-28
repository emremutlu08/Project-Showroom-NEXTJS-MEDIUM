/* MATERIAL UI */
import Typography from '@material-ui/core/Typography';

export interface HeroNameProps {
  fullName: String;
}

export default function HeroName({ fullName }: HeroNameProps) {
  return (
    <Typography
      component="h1"
      variant="h2"
      align="center"
      color="textPrimary"
      gutterBottom
    >
      {fullName}
    </Typography>
  );
}
