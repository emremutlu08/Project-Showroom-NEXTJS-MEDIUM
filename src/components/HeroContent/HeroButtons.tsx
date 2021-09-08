/* NEXT.JS */
import LinkNext from 'next/link';

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
  const galleryPage = '/';
  const detailsPage = '/details';

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item>
        <LinkNext href={galleryPage} passHref>
          <Button variant="contained" color="primary">
            View {firstButtonText}
          </Button>
        </LinkNext>
      </Grid>
      <Grid item>
        <LinkNext href={detailsPage} passHref>
          <Button variant="outlined">View {secondButtonText}</Button>
        </LinkNext>
      </Grid>
    </Grid>
  );
}
