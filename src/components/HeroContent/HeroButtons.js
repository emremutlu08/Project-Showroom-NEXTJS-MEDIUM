/* NEXT.JS */
import LinkNext from 'next/link';

/* MATERIAL UI */
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export default function HeroButtons({
  firstButtonText = 'My projects',
  secondButtonText,
  cv,
  currentUser,
}) {
  const galleryPage = '/';
  // const detailsPage = '/assets/others/Emre-Mutlu-Cv-ReactDev.pdf';
  const View = 'View';

  return (
    <>
      {currentUser && (
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <LinkNext href={galleryPage} passHref>
              <Button variant="contained" color="primary">
                View {firstButtonText}
              </Button>
            </LinkNext>
          </Grid>
          {cv && (
            <Grid item>
              <LinkNext href={cv} passHref>
                <a
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <Button variant="outlined">
                    {secondButtonText ? secondButtonText : View}
                  </Button>
                </a>
              </LinkNext>
            </Grid>
          )}
        </Grid>
      )}
    </>
  );
}
