/* MATERIAL UI */

// COMPONENTS
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

// ICONS
import Send from '@material-ui/icons/Send';

// STYLES
import { makeStyles } from '@material-ui/core/styles';

/* COMPONENTS */
import { useForm } from 'react-hook-form';
import FormInputText from '../formComponents/FormInputText';
import FormTextarea from '../formComponents/FormTextarea';
import api from '../../../lib/api/api';
import { notifySuccess } from './../toasts/notifySuccess';
import { notifyError } from './../toasts/notifyError';
import { useSession } from 'next-auth/react';
// import { useEffect } from 'react';
// import { useState } from 'react';

/* CUSTOM STYLES */
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
/* MAIN FUNCTION */
export default function MyDetailsForm() {
  /**
   * When a new user is created, the user is redirected to this page.
   *
   */
  const { data, status } = useSession(); // TODO: useSession will be converted to useUser() in separate hook file
  // const user = useUser(); // TODO: useSession will be converted to useUser() in separate hook file
  // console.log(user, 'user2');
  if (status !== 'authenticated') return null;

  // TODO: getUser from outside
  // const getUser = async () => {
  //   return await api.get('/users');
  // };

  // const user = getUser();

  // console.log(user, 'user');

  // console.log(data, 'data');
  const classes = useStyles();
  const { control, handleSubmit, reset } = useForm();

  const onSubmit = async (formData) => {
    const projectValues = { ...formData };
    if (formData.username) {
      // send data to db
      const response = await api.post('/users', projectValues); // TODO: change to /my-details
      console.log(response, 'response');
      if (response?.success) {
        reset({
          username: '',
          fullName: '',
          userImageUrl: '',
          myDetails: '',
          creatorEmail: formData?.user?.email,
        });
        notifySuccess(response?.message);
      } else {
        notifyError(response?.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <Typography gutterBottom variant="h4" component="h4" color="textPrimary">
        Manege Details <small>(E-Mail: {data?.user?.email})</small>
      </Typography>
      <FormInputText
        formId="username"
        control={control}
        label="User Name"
        inputProps={{ 'aria-label': 'User Name' }}
        defaultValue={data?.user?.email?.split('@')?.at(0)}
        required
      />
      <div className={classes.margin} />
      <FormInputText
        formId="fullName"
        control={control}
        label="Full Name (Ex: John Doe)"
        inputProps={{ 'aria-label': 'Full Name (Ex: John Doe)' }}
        defaultValue={data?.user?.name}
      />
      <div className={classes.margin} />
      <FormInputText
        formId="userImageUrl"
        control={control}
        label="Profile Image Url"
        inputProps={{ 'aria-label': 'Profile Image Url' }}
        defaultValue={data?.user?.image}
      />
      <div className={classes.margin} />
      <FormTextarea
        formId="myDetails"
        control={control}
        placeholder="My Details"
        inputProps={{ 'aria-label': 'My Details' }}
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
