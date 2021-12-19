/* NEXT.JS */
import { useRouter } from 'next/router';

/* MATERIAL UI */

// COMPONENTS
import Pagination from '@material-ui/lab/Pagination';

// STYLES
import { makeStyles, createStyles } from '@material-ui/core/styles';

/* COMPONENTS */
import { ITEMS_PER_PAGE } from '../General/PaginateFunc';
import GetCurrentPage from '../General/GetCurrentPage';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
        display: 'flex',
        justifyContent: 'flex-end',
      },
    },
  }),
);

export default function PaginationOutlined({ length }) {
  // Router
  const router = useRouter();
  const page = GetCurrentPage();
  const pageLength = Math.ceil(length / ITEMS_PER_PAGE);
  // Styles
  const classes = useStyles();

  const onPageChange = (_event, value) => {
    router.replace(`/?page=${value}`, '', { scroll: false });
  };

  return (
    <div className={classes.root}>
      <Pagination
        count={pageLength}
        variant="outlined"
        color="primary"
        onChange={onPageChange}
        page={page ? page : 1}
      />
    </div>
  );
}
