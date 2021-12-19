/* NEXT.JS */
import LinkNext from 'next/link';

/* MATERIAL UI */
import { Divider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import FavoriteIcon from '@material-ui/icons/Favorite';

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
      <div>
        Copyright © by{' '}
        <Link
          href="https://www.linkedin.com/in/emremutlu8/"
          target="_blank"
          color="inherit"
        >
          Emre MUTLU
        </Link>
        .
      </div>
      <div>
        You are 100% allowed to use this webpage for both personal and
        commercial use, but NOT to claim it as your own app.
      </div>{' '}
      <div>
        A credit to the original author,{' '}
        <Link
          href="https://project-showroom.vercel.app/"
          target="_blank"
          color="inherit"
        >
          Emre MUTLU
        </Link>
        , is of course highly appreciated!!
      </div>
      {new Date().getFullYear()}
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
          <LinkNext href="https://project-showroom.vercel.app/" passHref>
            <Link>PROJECT GALLERY | By Emre MUTLU</Link>
          </LinkNext>
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
