/* MATERIAL UI */

// COMPONENTS
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

// STYLES
import { makeStyles } from '@material-ui/core/styles';

/* COMPONENTS */
import CardTitle from './CardTitle';
import CardGalleryTags from './CardGalleryTags';
import CardGalleryTagsTitle from './CardGalleryTagsTitle';
import CardActionButtons from './CardActionButtons';

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

/* PROPS INTERFACE */
export interface CardGalleryItemsProps {
  cards: number[];
}

/* MAIN FUNCTION */
export default function CardGalleryItems({ cards }: CardGalleryItemsProps) {
  const classes = useStyles();

  return (
    <Grid container spacing={4}>
      {cards.map((card: number) => (
        <Grid item key={card} xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image="https://udemy-certificate.s3.amazonaws.com/image/UC-ee77a79b-0578-48ee-9a75-e5c63e5453b4.jpg"
              title="The Complete JavaScript Course 2021: From Zero to Expert!"
            />
            <CardContent className={classes.cardContent}>
              <CardTitle />
              {/* Card Gallery Tags */}
              <CardGalleryTagsTitle />
              <CardGalleryTags />
            </CardContent>
            <CardActionButtons />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
