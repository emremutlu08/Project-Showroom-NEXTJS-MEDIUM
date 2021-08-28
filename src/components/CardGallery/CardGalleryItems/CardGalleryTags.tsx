/* MATERIAL UI */

// COMPONENTS
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';

// STYLES
import { useTheme } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

/* MAIN FUNCTION */
export default function CardGalleryTags() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      spacing={1}
    >
      <Grid item>
        <Chip size={matches ? 'medium' : 'small'} label="React" />
      </Grid>
      <Grid item>
        <Chip size={matches ? 'medium' : 'small'} label="Javascript" />
      </Grid>
      <Grid item>
        <Chip size={matches ? 'medium' : 'small'} label="Express" />
      </Grid>
      <Grid item>
        <Chip size={matches ? 'medium' : 'small'} label="React Native" />
      </Grid>
      <Grid item>
        <Chip size={matches ? 'medium' : 'small'} label="Flutter" />
      </Grid>
      <Grid item>
        <Chip size={matches ? 'medium' : 'small'} label="React" />
      </Grid>
      <Grid item>
        <Chip size={matches ? 'medium' : 'small'} label="React" />
      </Grid>
      <Grid item>
        <Chip size={matches ? 'medium' : 'small'} label="React" />
      </Grid>
      <Grid item>
        <Chip size={matches ? 'medium' : 'small'} label="React" />
      </Grid>
      <Grid item>
        <Chip size={matches ? 'medium' : 'small'} label="React" />
      </Grid>
      <Grid item>
        <Chip size={matches ? 'medium' : 'small'} label="React" />
      </Grid>
      <Grid item>
        <Chip size={matches ? 'medium' : 'small'} label="React" />
      </Grid>
    </Grid>
  );
}
