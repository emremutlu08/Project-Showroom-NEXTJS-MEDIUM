/* NEXT.JS */
import { useRouter } from 'next/router';

/* MATERIAL UI */

// COMPONENTS
import Pagination from '@material-ui/lab/Pagination';

// STYLES
import { makeStyles, createStyles } from '@material-ui/core/styles';

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

export default function PaginationOutlined() {
  // Router
  const router = useRouter();
  const query = router.query;
  const page = parseInt(query.page);

  // Styles
  const classes = useStyles();

  const onPageChange = ({}, value: number) => {
    router.replace(`/?page=${value}`, '', { scroll: false });
  };

  return (
    <div className={classes.root}>
      <Pagination
        count={10}
        variant="outlined"
        color="primary"
        onChange={onPageChange}
        page={page ? page : 1}
      />
    </div>
  );
}
