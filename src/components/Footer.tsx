/* NEXT.JS */
import LinkNext from 'next/link';

/* MATERIAL UI */
import { Divider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import FavoriteIcon from '@material-ui/icons/Favorite';

/* COMPONENTS */
import UrlHomepage from './General/UrlHomepage';

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(6),
    backgroundColor: theme.palette.background.paper,
    minHeight: '100%',
  },
  gap: {
    height: '12px',
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link
        href="https://www.linkedin.com/in/emremutlu8/"
        target="_blank"
        color="inherit"
      >
        PROJECT GALLERY By Emre MUTLU
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  const classes = useStyles();
  return (
    <footer>
      <Divider />
      <div className={classes.footer}>
        <Typography
          variant="h6"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          {' '}
          <LinkNext href={UrlHomepage('/emremutlu')} passHref>
            <Link>PROJECT GALLERY | By Emre MUTLU</Link>
          </LinkNext>
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          I can build your dream apps with React and React Native!
        </Typography>
        <div className={classes.gap} />
        <Typography
          variant="h5"
          align="center"
          color="textSecondary"
          component="p"
        >
          Made with <FavoriteIcon fontSize={'small'} htmlColor="red" /> in
          Turkey
        </Typography>
        <div className={classes.gap} />
        <Copyright />
      </div>
    </footer>
  );
}
