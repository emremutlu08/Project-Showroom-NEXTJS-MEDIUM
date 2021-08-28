/* MATERIAL UI */
import Typography from '@material-ui/core/Typography';

export interface HeroDetailsProps {
  details: String;
}

export default function HeroDetails({ details }: HeroDetailsProps) {
  return (
    <Typography variant="h5" align="center" color="textSecondary" paragraph>
      {details}
    </Typography>
  );
}
