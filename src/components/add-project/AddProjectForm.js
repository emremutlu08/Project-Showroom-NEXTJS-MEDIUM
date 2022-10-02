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

export default function AddProjectForm({ props }) {
  const classes = useStyles();

  const { control, handleSubmit, reset } = useForm();

  const [tags, setTags] = useState([]);

  const onSubmit = async (data) => {
    const projectValues = {
      ...data,
      skillTags: tags,
      ...props,
    };
    if (data.projectTitle && data.thumbnailUrl) {
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectValues),
      });
      const notifyProjects = await response.json();

      if (notifyProjects.success === true) {
        reset({
          projectTitle: '',
          thumbnailUrl: '',
          description: '',
          leftButtonTitle: 'View Online',
          leftButtonUrl: '',
          rightButtonTitle: 'View Codes',
          rightButtonUrl: '',
        });
        setTags([]);
        notifySuccess(notifyProjects.message || 'created');
      } else {
        notifyError(notifyProjects.message || 'error');
      }
    }
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
        required
      />
      <div className={classes.margin} />

      <FormInputText
        formId="thumbnailUrl"
        control={control}
        label="Thumbnail Url"
        required
      />
      <div className={classes.margin} />
      <FormTextarea
        formId="description"
        control={control}
        placeholder="Description"
      />
      <div className={classes.margin} />
      <FormAutocomplete
        formId="skillTags"
        label="Skill Tags (ex: ReactJs, Materialui)"
        setTags={setTags}
        tags={tags}
        options={AllIcons}
        helperText="If you cannot find your technology, you can write it anyway."
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
          Send
        </Button>
      </Box>
    </form>
  );
}
