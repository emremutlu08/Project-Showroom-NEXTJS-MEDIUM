/* React */
import { useState, useContext, useEffect } from 'react';

/* MATERIAL UI */

// COMPONENTS
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';

// STYLES
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

/* COMPONENTS */
import GetIcons from '../GetIcons';
import { FilterButtonsContext } from './FilterButtonsContext';

/* CUSTOM STYLES */
const useStyles = makeStyles(() => ({
  iconSize: {
    height: '60%',
  },
}));

/* MAIN FUNCTION */
export default function FilterButtons(props) {
  const { label, iconName } = props;
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const [selectedTag, setSelectedTag] = useState(true);
  const onClickHandler = () => {
    setSelectedTag(!selectedTag);
  };
  const { selectAll } = useContext(FilterButtonsContext);

  useEffect(() => {
    setSelectedTag(selectAll);
  }, [selectAll]);

  return (
    <>
      <Grid item>
        <Chip
          size={matches ? 'medium' : 'small'}
          label={label}
          icon={<GetIcons iconName={iconName} className={classes.iconSize} />}
          onClick={onClickHandler}
          color={selectedTag ? 'primary' : 'default'}
        />
      </Grid>
    </>
  );
}
