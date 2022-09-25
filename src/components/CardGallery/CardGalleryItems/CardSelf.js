/* MATERIAL UI */

// COMPONENTS
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

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

/* MAIN FUNCTION */
export default function CardSelf({ card }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardGalleryHeader card={card} />
      <CardMedia
        className={classes.cardMedia}
        image={card.thumbnailUrl}
        title={card.projectTitle}
      />
      <CardContent className={classes.cardContent}>
        <CardTitle title={card.projectTitle} />
        {/* Text */}
        <div className={classes.margin} />
        <Typography variant="body2" color="textSecondary" component="p">
          {card.description}
        </Typography>
        <div className={classes.margin} />
        {/* Card Gallery Tags */}
        <CardGalleryTagsTitle />
        <CardGalleryTags tags={card.skillTags} />
      </CardContent>
      <CardActionButtons
        leftTitle={card.leftButtonTitle}
        leftUrl={card.leftButtonUrl}
        rightTitle={card.rightButtonTitle}
        rightUrl={card.rightButtonUrl}
      />
    </Card>
  );
}
