/* MATERIAL UI */
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export interface HeroTextProps {
  firstButtonText: String;
  secondButtonText: String;
}

export default function HeroButtons({
  firstButtonText = 'My projects',
  secondButtonText = 'Details about me',
}: HeroTextProps) {
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item>
        <Button variant="contained" color="primary">
          View {firstButtonText}
        </Button>
      </Grid>
      <Grid item>
        <Button variant="outlined" disabled>
          View {secondButtonText}
        </Button>
      </Grid>
    </Grid>
  );
}
