import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      <div>
        Copyright © by{' '}
        <Link
          href="https://www.linkedin.com/in/emremutlujs/"
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
};

export { Copyright };
