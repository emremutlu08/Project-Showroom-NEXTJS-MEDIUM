/* MATERIAL UI */

// COMPONENTS
import Box from '@material-ui/core/Box';

// STYLES
import { makeStyles } from '@material-ui/core/styles';

/* COMPONENTS */
import EditProject from '../../src/components/edit-project/EditProject';

import { getCookie } from 'cookies-next';
import Projects from '../../models/Projects';
import connect from '../../lib/database';

/* CUSTOM STYLES */
const useStyles = makeStyles(() => ({
  main: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  fillRest: {
    height: '25vw',
  },
}));

/* MAIN FUNCTION */
export default function EditProjectPage(props) {
  const classes = useStyles();

  return (
    <Box className={classes.main}>
      <EditProject props={props} />
      <div className={classes.fillRest} />
    </Box>
  );
}

export async function getServerSideProps({ req, res }) {
  await connect();

  const cardId = getCookie('cardIdToken', { req, res }) || null;

  const currentUserProjects = await Projects.findById({
    _id: cardId,
  });

  // if (!currentUserProjects)
  //   return {
  //     redirect: {
  //       destination: '/',
  //     },
  //   };

  return {
    props: {
      projectTitle: currentUserProjects.projectTitle,
      thumbnailUrl: currentUserProjects.thumbnailUrl,
      description: currentUserProjects.description,
      skillTags: currentUserProjects.skillTags,
      leftButtonTitle: currentUserProjects.leftButtonTitle,
      leftButtonUrl: currentUserProjects.leftButtonUrl,
      rightButtonTitle: currentUserProjects.rightButtonTitle,
      rightButtonUrl: currentUserProjects.rightButtonUrl,
      creatorEmail: currentUserProjects.creatorEmail,
      creatorId: currentUserProjects.creatorId,
      creatorDisplayName: currentUserProjects.creatorDisplayName,
    },
  };
}
