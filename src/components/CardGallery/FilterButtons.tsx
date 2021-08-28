/* MATERIAL UI */

// COMPONENTS
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import DeleteIcon from '@material-ui/icons/Delete';

// STYLES
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

/* ICONS */
import {
  ReactJs,
  Express,
  Flutter,
  Nextdotjs,
  Javascript,
  Typescript,
  Mongodb,
  Nodedotjs,
  Styledcomponents,
  Firebase,
  CssThree,
  Html5,
  Redux,
  Jest,
  Tailwindcss,
  Mysql,
  Postcss,
  Postgresql,
  Nestjs,
  Graphql,
  Docker,
  Bootstrap,
  Digitalocean,
  Materialui,
} from '@icons-pack/react-simple-icons';

/* CUSTOM STYLES */
const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  iconSize: {
    height: '60%',
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  topSpace: {
    marginTop: theme.spacing(4),
  },
  allSpace: {
    margin: theme.spacing(4),
  },
}));

/* MAIN FUNCTION */
export default function FilterButtons() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <div className={classes.heroButtons}>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        spacing={1}
      >
        <Grid item>
          <Chip
            size={matches ? 'medium' : 'small'}
            label="React (20)"
            icon={<ReactJs className={classes.iconSize} />}
            onClick={() => console.log('hello')}
            color="primary"
          />
        </Grid>
        <Grid item>
          <Chip
            size={matches ? 'medium' : 'small'}
            label="Javascript (101)"
            icon={<Javascript className={classes.iconSize} />}
            onClick={() => console.log('hello')}
            color="primary"
          />
        </Grid>
        <Grid item>
          <Chip
            size={matches ? 'medium' : 'small'}
            label="Next.JS (100)"
            icon={<Nextdotjs className={classes.iconSize} />}
            onClick={() => console.log('hello')}
            color="primary"
          />
        </Grid>
        <Grid item>
          <Chip
            size={matches ? 'medium' : 'small'}
            label="Express (1)"
            icon={<Express className={classes.iconSize} />}
            onClick={() => console.log('hello')}
            color="primary"
          />
        </Grid>
        <Grid item>
          <Chip
            size={matches ? 'medium' : 'small'}
            label="React Native (5)"
            icon={<ReactJs className={classes.iconSize} />}
            onClick={() => console.log('hello')}
            color="primary"
          />
        </Grid>
        <Grid item>
          <Chip
            size={matches ? 'medium' : 'small'}
            label="Flutter (10)"
            icon={<Flutter className={classes.iconSize} />}
            onClick={() => console.log('hello')}
            color="primary"
          />
        </Grid>
        <Grid item>
          <Chip
            size={matches ? 'medium' : 'small'}
            label="Typescript (5)"
            icon={<Typescript className={classes.iconSize} />}
            onClick={() => console.log('hello')}
            color="primary"
          />
        </Grid>
        <Grid item>
          <Chip
            size={matches ? 'medium' : 'small'}
            label="MongoDB (5)"
            icon={<Mongodb className={classes.iconSize} />}
            onClick={() => console.log('hello')}
            color="primary"
          />
        </Grid>
        <Grid item>
          <Chip
            size={matches ? 'medium' : 'small'}
            label="Node.js (5)"
            icon={<Nodedotjs className={classes.iconSize} />}
            onClick={() => console.log('hello')}
            color="primary"
          />
        </Grid>
        <Grid item>
          <Chip
            size={matches ? 'medium' : 'small'}
            label="Styled Components (5)"
            icon={<Styledcomponents className={classes.iconSize} />}
            onClick={() => console.log('hello')}
            color="primary"
          />
        </Grid>
        <Grid item>
          <Chip
            size={matches ? 'medium' : 'small'}
            label="Firebase (5)"
            icon={<Firebase className={classes.iconSize} />}
            onClick={() => console.log('hello')}
            color="primary"
          />
        </Grid>
        <Grid item>
          <Chip
            size={matches ? 'medium' : 'small'}
            label="Css3 (5)"
            icon={<CssThree className={classes.iconSize} />}
            onClick={() => console.log('hello')}
            color="primary"
          />
        </Grid>
        <Grid item>
          <Chip
            size={matches ? 'medium' : 'small'}
            label="Html5 (5)"
            icon={<Html5 className={classes.iconSize} />}
            onClick={() => console.log('hello')}
            color="primary"
          />
        </Grid>
        <Grid item>
          <Chip
            size={matches ? 'medium' : 'small'}
            label="Redux (5)"
            icon={<Redux className={classes.iconSize} />}
            onClick={() => console.log('hello')}
            color="primary"
          />
        </Grid>
        <Grid item>
          <Chip
            size={matches ? 'medium' : 'small'}
            label="Jest (5)"
            icon={<Jest className={classes.iconSize} />}
            onClick={() => console.log('hello')}
            color="primary"
          />
        </Grid>
        <Grid item>
          <Chip
            size={matches ? 'medium' : 'small'}
            label="TailwindCSS (5)"
            icon={<Tailwindcss className={classes.iconSize} />}
            onClick={() => console.log('hello')}
            color="primary"
          />
        </Grid>
        <Grid item>
          <Chip
            size={matches ? 'medium' : 'small'}
            label="Mysql (5)"
            icon={<Mysql className={classes.iconSize} />}
            onClick={() => console.log('hello')}
            color="primary"
          />
        </Grid>
        <Grid item>
          <Chip
            size={matches ? 'medium' : 'small'}
            label="Postcss (5)"
            icon={<Postcss className={classes.iconSize} />}
            onClick={() => console.log('hello')}
            color="primary"
          />
        </Grid>
        <Grid item>
          <Chip
            size={matches ? 'medium' : 'small'}
            label="Postgresql (5)"
            icon={<Postgresql className={classes.iconSize} />}
            onClick={() => console.log('hello')}
            color="primary"
          />
        </Grid>
        <Grid item>
          <Chip
            size={matches ? 'medium' : 'small'}
            label="NestJS (5)"
            icon={<Nestjs className={classes.iconSize} />}
            onClick={() => console.log('hello')}
            color="primary"
          />
        </Grid>
        <Grid item>
          <Chip
            size={matches ? 'medium' : 'small'}
            label="GraphQL (5)"
            icon={<Graphql className={classes.iconSize} />}
            onClick={() => console.log('hello')}
            color="primary"
          />
        </Grid>
        <Grid item>
          <Chip
            size={matches ? 'medium' : 'small'}
            label="Docker (5)"
            icon={<Docker className={classes.iconSize} />}
            onClick={() => console.log('hello')}
            color="primary"
          />
        </Grid>
        <Grid item>
          <Chip
            size={matches ? 'medium' : 'small'}
            label="Bootstrap (5)"
            icon={<Bootstrap className={classes.iconSize} />}
            onClick={() => console.log('hello')}
            color="primary"
          />
        </Grid>
        <Grid item>
          <Chip
            size={matches ? 'medium' : 'small'}
            label="Digitalocean (5)"
            icon={<Digitalocean className={classes.iconSize} />}
            onClick={() => console.log('hello')}
            color="primary"
          />
        </Grid>
        <Grid item>
          <Chip
            size={matches ? 'medium' : 'small'}
            label="Material Ui (5)"
            icon={<Materialui className={classes.iconSize} />}
            onClick={() => console.log('hello')}
            color="primary"
          />
        </Grid>
      </Grid>
      <div className={classes.topSpace} />
      <Box display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          size="small"
          color="secondary"
          startIcon={<DeleteIcon />}
        >
          Remove selections
        </Button>
      </Box>
    </div>
  );
}
