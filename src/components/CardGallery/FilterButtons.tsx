/* REACT */
import { useState } from 'react';

/* MATERIAL UI */

// COMPONENTS
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import DeleteIcon from '@material-ui/icons/Delete';
import SelectAllIcon from '@material-ui/icons/SelectAll';

// STYLES
import { makeStyles } from '@material-ui/core/styles';

/* COMPONENTS */
import FilterButton from './FilterButton';
import { FilterButtonsContext } from './FilterButtonsContext';

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
  const [selectAll, setSelectAll] = useState(true);

  return (
    <FilterButtonsContext.Provider value={{ selectAll }}>
      <div className={classes.heroButtons}>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
        >
          <FilterButton label="React (20)" iconName="ReactJs" />
          <FilterButton label="Javascript (120)" iconName="Javascript" />
          <FilterButton label="Next.JS (10)" iconName="Nextdotjs" />
          <FilterButton label="Express (30)" iconName="Express" />
          <FilterButton label="React Native (27)" iconName="ReactJs" />

          <FilterButton label="Flutter (20)" iconName="Flutter" />
          <FilterButton label="Typescript (120)" iconName="Typescript" />
          <FilterButton label="MongoDB (10)" iconName="Mongodb" />
          <FilterButton label="Node.js (30)" iconName="Nodedotjs" />
          <FilterButton
            label="Styled Components (27)"
            iconName="Styledcomponents"
          />

          <FilterButton label="Firebase (20)" iconName="Firebase" />
          <FilterButton label="Css3 (120)" iconName="CssThree" />
          <FilterButton label="Html5 (10)" iconName="Html5" />
          <FilterButton label="Redux (30)" iconName="Redux" />
          <FilterButton label="Jest (27)" iconName="Jest" />

          <FilterButton label="TailwindCSS (20)" iconName="Tailwindcss" />
          <FilterButton label="Mysql (120)" iconName="Mysql" />
          <FilterButton label="Postcss (10)" iconName="Postcss" />
          <FilterButton label="Postgresql (30)" iconName="Postgresql" />
          <FilterButton label="NestJS (27)" iconName="Nestjs" />

          <FilterButton label="GraphQL (20)" iconName="Graphql" />
          <FilterButton label="Docker (120)" iconName="Docker" />
          <FilterButton label="Bootstrap (10)" iconName="Bootstrap" />
          <FilterButton label="Digitalocean (30)" iconName="Digitalocean" />
          <FilterButton label="Material Ui (27)" iconName="Materialui" />
        </Grid>
        <div className={classes.topSpace} />
        <Box
          display="flex"
          justifyContent="flex-end"
          onClick={() => setSelectAll(!selectAll)}
        >
          {selectAll ? (
            <Button
              variant="contained"
              size="small"
              color="secondary"
              startIcon={<DeleteIcon />}
            >
              Remove selections
            </Button>
          ) : (
            <Button
              variant="contained"
              size="small"
              color="secondary"
              startIcon={<SelectAllIcon />}
            >
              Select All
            </Button>
          )}
        </Box>
      </div>
    </FilterButtonsContext.Provider>
  );
}
