/* REACT */
import { useState, useContext } from 'react';

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

/* CONTEXTS */
import { GeneratedContext } from '../Contexts';
import PropTypes from 'prop-types';

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
  const props = useContext(GeneratedContext);
  const classes = useStyles();
  const [selectAll, setSelectAll] = useState(true);
  const projectList = props?.projects?.data;
  const count = {};
  projectList?.map((project) => {
    const { skillTags } = project;
    skillTags.sort();
    skillTags.forEach((i) => {
      count[i] = (count[i] || 0) + 1;
    });
  });
  const FilterButtons = Object.entries(count).map((button, i) => {
    return (
      <FilterButton
        label={`${button[0]} (${button[1]})`}
        iconName={button[0]}
        key={`${button}${i}`}
      />
    );
  });
  return (
    <FilterButtonsContext.Provider value={{ selectAll }}>
      <div className={classes.heroButtons}>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
        >
          {FilterButtons}
        </Grid>
        <div className={classes.topSpace} />
        <Box display="flex" justifyContent="flex-end">
          <span onClick={() => setSelectAll(!selectAll)}>
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
          </span>
        </Box>
      </div>
    </FilterButtonsContext.Provider>
  );
}

FilterButtons.propTypes = {
  projects: PropTypes.object,
};
