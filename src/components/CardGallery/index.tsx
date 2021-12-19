/* REACT */
import { useContext } from 'react';

/* MATERIAL UI */
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Divider } from '@material-ui/core';

/* COMPONENTS */
import FilterButtons from './FilterButtons';
import PaginationOutlined from './PaginationOutlined';
import CardGalleryItems from './CardGalleryItems';

/* CONTEXTS */
import { GeneratedContext } from '../Contexts';
import PropTypes from 'prop-types';

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

export default function CardGallery() {
  const props = useContext(GeneratedContext);
  const classes = useStyles();
  if (props?.projects?.loading) {
    return <div>Loading...</div>;
  }
  const cards = props?.projects?.data ?? [];
  const isShowFilters = process.env.NEXT_PUBLIC_IS_FILTERS_ACTIVE;
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <>
        {isShowFilters === 'true' && (
          <>
            <FilterButtons />
            <Divider variant="middle" light className={classes.topSpace} />
            <div className={classes.allSpace} />
          </>
        )}

        {/* End hero unit */}
        <PaginationOutlined length={cards.length} />
        <div className={classes.allSpace} />
        <CardGalleryItems cards={cards} />
        <div className={classes.allSpace} />
        <PaginationOutlined length={cards.length} />
      </>
    </Container>
  );
}

CardGallery.propTypes = {
  projects: PropTypes.object,
};
