/* NEXT.JS */
import LinkNext from 'next/link';

/* MATERIAL UI */
// Components
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

// Style
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  title: {
    [theme.breakpoints.down('md')]: {
      fontSize: 'medium',
    },
  },
  link: {
    cursor: 'pointer',
  },
}));

/* COMPONENTS */
import UrlHomepage from '../General/UrlHomepage';

export default function AppBarTitle() {
  const classes = useStyles();
  return (
    <Typography variant="h6" color="inherit" noWrap className={classes.title}>
      <LinkNext href={UrlHomepage(`/`)} passHref>
        <Link color="inherit">Emre MUTLU</Link>
      </LinkNext>{' '}
      |{' '}
      <LinkNext href="/" passHref>
        <Link color="inherit">PROJECT GALLERY</Link>
      </LinkNext>
    </Typography>
  );
}
