/* MATERIAL UI */
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Divider } from '@material-ui/core';

/* COMPONENTS */
import FilterButtons from './FilterButtons';
import PaginationOutlined from './PaginationOutlined';
import CardGalleryItems from './CardGalleryItems';

// import { getCookie } from 'cookies-next';
// import jwt from 'jsonwebtoken';
// import Users from '../../../models/Users';
// import Profiles from '../../../models/Profiles';
// import Projects from '../../../models/Projects';

/* CONTEXTS */
// import PropTypes from 'prop-types';

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

export default function CardGallery({ currentUserProjects, currentUser }) {
  const classes = useStyles();

  const cards = currentUserProjects || [];
  const isShowFilters = process.env.NEXT_PUBLIC_IS_FILTERS_ACTIVE;
  return (
    <>
      {currentUser && (
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
            {cards.length !== 0 ? (
              <>
                <PaginationOutlined length={cards.length} />
                <div className={classes.allSpace} />
                <CardGalleryItems cards={cards} />
                <div className={classes.allSpace} />
                <PaginationOutlined length={cards.length} />
              </>
            ) : (
              <p>
                If you add projects or search user, you will see all of them in
                here.
              </p>
            )}
          </>
        </Container>
      )}
    </>
  );
}

// CardGallery.propTypes = {
//   projects: PropTypes.object,
// };

// export async function getServerSideProps({ req, res }) {
//   const token = getCookie('token', { req, res });
//   if (!token)
//     return {
//       redirect: {
//         destination: '/login',
//       },
//     };

//   const verified = jwt.decode(token);

//   const currentUser = await Users.findOne({ _id: verified?.id });
//   const profile = await Profiles.findOne({ creatorId: verified?.id });
//   const projects = await Projects.find({ creatorId: verified?.id });

//   // if (!currentUser)
//   //   return {
//   //     redirect: {
//   //       destination: '/',
//   //     },
//   //   };

//   const currentUserStr = JSON.stringify(currentUser);
//   const currentProfileStr = JSON.stringify(profile);
//   const projectsStr = JSON.stringify(projects);

//   return {
//     props: { currentUserStr, currentProfileStr, projectsStr },
//   };
// }
