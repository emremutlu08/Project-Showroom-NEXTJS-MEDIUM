/* MATERIAL UI */
// COMPONENTS
import Grid from '@material-ui/core/Grid';

/* COMPONENTS */
import CardSelf from './CardSelf';
import PaginateFunc from '../../General/PaginateFunc';
import { ITEMS_PER_PAGE } from '../../General/PaginateFunc';
import GetCurrentPage from '../../General/GetCurrentPage';

/* PROPS INTERFACE */
export interface CardGalleryItemsProps {
  cards: object[];
}

/* MAIN FUNCTION */
export default function CardGalleryItems({ cards }: CardGalleryItemsProps) {
  let currentPage = GetCurrentPage();
  let pagedCards = PaginateFunc(cards, ITEMS_PER_PAGE, currentPage);

  return (
    <Grid container spacing={4}>
      {pagedCards.map((card: object, i: number) => {
        return (
          <Grid item key={`${card}${i}`} xs={12} sm={6} md={4}>
            <CardSelf card={card} />
          </Grid>
        );
      })}
    </Grid>
  );
}
