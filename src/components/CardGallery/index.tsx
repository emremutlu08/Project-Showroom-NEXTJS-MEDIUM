/* MATERIAL UI */
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

const cards = [1, 2, 3, 4, 5, 6];

export function getStaticProps() {
  return {
    props: {
      posts: ['a', 'b'],
    },
  };
}

export default function CardGallery(props: any) {
  const classes = useStyles();

  console.log(props, 'CardGallery (index.tsx:53)'); // Will log props passed in `getStaticProps`

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <FilterButtons />
      <Divider variant="middle" light className={classes.topSpace} />
      <div className={classes.allSpace} />
      {/* End hero unit */}
      <PaginationOutlined />
      <div className={classes.allSpace} />
      <CardGalleryItems cards={cards} />
      <div className={classes.allSpace} />
      <PaginationOutlined />
    </Container>
  );
}
