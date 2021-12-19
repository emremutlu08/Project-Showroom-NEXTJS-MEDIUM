import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';

/* COMPONENTS */
import HeroName from './HeroName';
import HeroDetails from './HeroDetails';
import HeroButtons from './HeroButtons';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  topSpace: {
    marginTop: theme.spacing(4),
  },
}));

export default function HeroContent() {
  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="md">
        <HeroName fullname={'EMRE MUTLU'} />
        <HeroDetails details={'I am a frontend web developer.'} />
        <div className={classes.topSpace} />
        <HeroButtons
          firstButtonText={'My projects'}
          secondButtonText={'My Cv (PDF)'}
        />
        <Divider className={classes.topSpace} />
      </Container>
    </div>
  );
}
