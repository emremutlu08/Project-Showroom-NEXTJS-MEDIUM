/* MATERIAL UI */

// COMPONENTS
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';

// STYLES
import { useTheme } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

/* MAIN FUNCTION */
export default function CardGalleryTags({ tags }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const TagChips = tags.map((tag, i) => {
    return (
      <Grid item key={`${i}${tag}`}>
        <Chip size={matches ? 'medium' : 'small'} label={tag} />
      </Grid>
    );
  });

  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      spacing={1}
    >
      {TagChips.map((chip) => chip)}
    </Grid>
  );
}
