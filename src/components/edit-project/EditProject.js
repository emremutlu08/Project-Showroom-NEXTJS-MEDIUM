import { useState } from 'react';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import Send from '@material-ui/icons/Send';

import { makeStyles } from '@material-ui/core/styles';

import { useForm } from 'react-hook-form';
import FormInputText from '../formComponents/FormInputText';
import FormAutocomplete from '../formComponents/FormAutocomplete';
import FormTextarea from '../formComponents/FormTextarea';
import { AllIcons } from '../GetIcons';
import { notifySuccess } from '../toasts/notifySuccess';
import { notifyError } from '../toasts/notifyError';

import { getCookie, setCookie } from 'cookies-next';

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

export default function EditProject({ props }) {
  const { control, handleSubmit } = useForm();
  const classes = useStyles();

  const [tags, setTags] = useState(props.skillTags || []);

  const onSubmit = async (data) => {
    const getCardId = getCookie('cardIdToken') || null;

    const projectValues = {
      ...data,
      skillTags: tags,
    };
    const response = await fetch(`/api/projects/${getCardId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(projectValues),
    });

    if (response.status === 200) {
      notifySuccess('Updated successfully');
    } else {
      notifyError('Something went wrong');
    }
    setCookie('cardIdToken');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <Typography gutterBottom variant="h4" component="h4" color="textPrimary">
        Add Project
      </Typography>
      <FormInputText
        formId="projectTitle"
        control={control}
        label="Project Title"
        defaultValue={props.projectTitle}
        required
      />
      <div className={classes.margin} />

      <FormInputText
        formId="thumbnailUrl"
        control={control}
        label="Thumbnail Url"
        defaultValue={props.thumbnailUrl}
        required
      />
      <div className={classes.margin} />
      <FormTextarea
        formId="description"
        control={control}
        placeholder="Description"
        defaultValue={props.description}
      />
      <div className={classes.margin} />
      <FormAutocomplete
        formId="skillTags"
        label="Skill Tags (ex: ReactJs, Materialui)"
        setTags={setTags}
        tags={tags}
        options={AllIcons}
        helperText="If you cannot find your technology, you can write it anyway."
        defaultValue={props.skillTags}
      />
      <div className={classes.margin} />
      <div className={classes.doubleForms}>
        <FormInputText
          formId="leftButtonTitle"
          control={control}
          defaultValue="View Online"
          label="Left Button Title"
        />
        <FormInputText
          formId="leftButtonUrl"
          control={control}
          helperText="(If you don't have url for this button, please
        leave it empty)"
          label="Left Button Url"
          defaultValue={props.leftButtonUrl}
        />
      </div>
      <div className={classes.margin} />
      <div className={classes.doubleForms}>
        <FormInputText
          formId="rightButtonTitle"
          control={control}
          defaultValue="View Codes"
          label="Right Button Title"
        />
        <FormInputText
          formId="rightButtonUrl"
          control={control}
          helperText="(If you don't have url for this button, please
        leave it empty)"
          label="Right Button Url"
          defaultValue={props.rightButtonUrl}
        />
      </div>
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
          Update
        </Button>
      </Box>
    </form>
  );
}
