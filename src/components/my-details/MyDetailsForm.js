import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import Send from '@material-ui/icons/Send';

import { makeStyles } from '@material-ui/core/styles';

import { useForm } from 'react-hook-form';
import FormInputText from '../formComponents/FormInputText';
import FormTextarea from '../formComponents/FormTextarea';
import { notifySuccess } from './../toasts/notifySuccess';
import { notifyError } from './../toasts/notifyError';

const useStyles = makeStyles((theme) => ({
  form: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  margin: {
    margin: theme.spacing(2),
  },
  doubleForms: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      gap: theme.spacing(2),
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
  positionRight: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

export default function MyDetailsForm({ props }) {
  const classes = useStyles();
  const { control, handleSubmit } = useForm();

  const {
    username,
    myDetails,
    giveNameToButton,
    title,
    addOneUrl,
    creatorDisplayName,
    creatorEmail,
    creatorId,
    creatorDefaultUserName,
  } = props;

  const onSubmit = async (formData) => {
    const projectValues = {
      ...formData,
      creatorDisplayName,
      creatorEmail,
      creatorId,
      creatorDefaultUserName,
    };
    if (formData) {
      const response = await fetch('/api/profiles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectValues),
      });
      const notifyProfile = await response.json();
      if (notifyProfile.success === true) {
        notifySuccess(notifyProfile.message || 'Profile updated!');
      } else {
        notifyError(notifyProfile.message || 'Profile could not updated!');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <Typography gutterBottom variant="h4" component="h4" color="textPrimary">
        Manege Details <small>(E-Mail: {props.creatorEmail})</small>
      </Typography>
      <FormInputText
        formId="username"
        control={control}
        label="User Name"
        inputProps={{ 'aria-label': 'User Name' }}
        defaultValue={username ? username : props.creatorDisplayName}
        disabled
      />
      <div className={classes.margin} />
      <FormTextarea
        formId="myDetails"
        control={control}
        placeholder="My Details"
        defaultValue={myDetails ? myDetails : ''}
        inputProps={{ 'aria-label': 'My Details' }}
      />
      <div className={classes.margin} />
      <FormInputText
        formId="giveNameToButton"
        placeholder="Give A Name To Button"
        control={control}
        defaultValue={giveNameToButton ? giveNameToButton : ''}
        label="Give a name to button"
      />
      <div className={classes.margin} />
      <FormInputText
        formId="addOneUrl"
        placeholder="Add One Url"
        control={control}
        defaultValue={addOneUrl ? addOneUrl : ''}
        label="Add a link to your details"
      />
      <div className={classes.margin} />
      <FormInputText
        formId="title"
        placeholder="Change Title"
        control={control}
        defaultValue={title ? title : ''}
        label="Change Title"
      />
      <div className={classes.margin} />
      <Box className={classes.positionRight}>
        <div className={classes.margin} />
        <Button
          variant="contained"
          color="primary"
          endIcon={<Send />}
          type="submit"
          size="large"
        >
          Send
        </Button>
      </Box>
    </form>
  );
}
