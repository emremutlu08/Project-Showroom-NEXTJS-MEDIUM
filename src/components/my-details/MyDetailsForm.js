/* REACT */
import { useState } from 'react';

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
import { useSession } from 'next-auth/react';
import { notifySuccess } from './../toasts/notifySuccess';
import { notifyError } from './../toasts/notifyError';

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
  const { data, status } = useSession();
  if (status !== 'authenticated') return null;
  console.log(data, 'data');
  const classes = useStyles();
  const { control, handleSubmit, reset } = useForm();

  const [tags, setTags] = useState([]);
  // const [passwordCorrect, setPasswordCorrect] = useState(true);
  // const FormSecretPassword = process.env.NEXT_PUBLIC_SECRET_PW;

  const onSubmit = async (data) => {
    const projectValues = { ...data, skillTags: tags };
    // const isPwCorrect = FormSecretPassword === data.pw;
    // setPasswordCorrect(!isPwCorrect);
    if (data.projectTitle && data.thumbnailUrl) {
      // if (data.projectTitle && data.thumbnailUrl && isPwCorrect) {
      // send data to db
      const response = await api.post('/projects', projectValues); // TODO: change to /my-details
      console.log(response, 'response');
      if (response?.data?.success) {
        reset({
          username: '',
          myDetails: '',
          creatorEmail: data?.user?.email,
        });
        setTags([]);
        notifySuccess(response?.data?.message);
      } else {
        notifyError(response?.data?.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <Typography gutterBottom variant="h4" component="h4" color="textPrimary">
        Manege Details
      </Typography>
      <FormInputText
        formId="username"
        control={control}
        label="User Name"
        required
      />
      <div className={classes.margin} />
      <FormTextarea
        formId="myDetails"
        control={control}
        placeholder="My Details"
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
