/* NEXT.JS */
import LinkNext from 'next/link';

/* MATERIAL UI */
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export default function HeroButtons({
  firstButtonText = 'My projects',
  secondButtonText = 'Details about me',
}) {
  const galleryPage = '/';
  const detailsPage = '/assets/others/Emre-Mutlu-Cv-ReactDev.pdf';

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
          <a
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <Button variant="outlined">View {secondButtonText}</Button>
          </a>
        </LinkNext>
      </Grid>
    </Grid>
  );
}
