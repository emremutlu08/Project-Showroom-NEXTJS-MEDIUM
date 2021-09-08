/* MATERIAL UI */

// COMPONENTS
import Typography from '@material-ui/core/Typography';
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
import CardGalleryHeader from './CardGalleryHeader';

/* CUSTOM STYLES */
const useStyles = makeStyles((theme) => ({
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
  margin: {
    margin: theme.spacing(1),
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
            <CardGalleryHeader />
            <CardMedia
              className={classes.cardMedia}
              image="/assets/images/thumbnail.jpg"
              title="The Complete JavaScript Course 2021: From Zero to Expert!"
            />
            <CardContent className={classes.cardContent}>
              <CardTitle />
              {/* Text */}
              <div className={classes.margin} />
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
              <div className={classes.margin} />
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
