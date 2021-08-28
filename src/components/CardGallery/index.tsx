import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import { Divider } from '@material-ui/core';

/* COMPONENTS */
import FilterButtons from './FilterButtons';
import PaginationOutlined from './PaginationOutlined';
import CardGalleryItems from './CardGalleryItems';

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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Footer() {
  const classes = useStyles();
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      {/* Will be added! */}
      <FilterButtons />
      <Divider variant="middle" light className={classes.topSpace} />
      <div className={classes.allSpace} />
      {/* End hero unit */}
      <CardGalleryItems cards={cards} />
      <div className={classes.allSpace} />
      <PaginationOutlined />
    </Container>
  );
}
