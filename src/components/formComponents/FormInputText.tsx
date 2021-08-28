/* MATERIAL UI */

// COMPONENTS
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

// ICONS
import Send from '@material-ui/icons/Send';

// STYLES
import { makeStyles, Theme } from '@material-ui/core/styles';

/* COMPONENTS */
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

/* CUSTOM STYLES */
const useStyles = makeStyles((theme: Theme) => ({
  paddingSides: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  form: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  margin: {
    margin: theme.spacing(2),
  },
  doubleForms: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  positionRight: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

/* INTERFACE */
interface IFormInput {
  title: string;
  imageUrl: string;
  firstName: string;
  skills: string;
  leftButtonTitle: string;
  leftButtonUrl: string;
  rightButtonTitle: string;
  rightButtonUrl: string;
}

/* MAIN FUNCTION */
export default function FormInputText() {
  const classes = useStyles();
  const { control, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <Typography gutterBottom variant="h4" component="h4" color="textPrimary">
        Add Project
      </Typography>
      <Controller
        name="title"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <FormControl fullWidth>
            <InputLabel htmlFor="title">Project Title</InputLabel>
            <Input {...field} id="title" />
          </FormControl>
        )}
      />
      <div className={classes.margin} />
      <Controller
        name="imageUrl"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <FormControl fullWidth>
            <InputLabel htmlFor="imageUrl">Thumbnail Url</InputLabel>
            <Input {...field} id="imageUrl" />
          </FormControl>
        )}
      />
      <div className={classes.margin} />
      <Controller
        name="skills"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <FormControl fullWidth>
            <InputLabel htmlFor="skills">
              Skill Tags (ex: React, Angular) [Note: Please use comma "," to add
              more tags]
            </InputLabel>
            <Input {...field} id="skills" />
          </FormControl>
        )}
      />
      {/* TODO: Yarın gerekli form olursa onları da ekle! */}
      <div className={classes.margin} />
      <div className={classes.doubleForms}>
        <Controller
          name="leftButtonTitle"
          control={control}
          defaultValue="View Online"
          render={({ field }) => (
            <FormControl fullWidth>
              <InputLabel htmlFor="leftButtonTitle">
                Left Button Title
              </InputLabel>
              <Input {...field} id="leftButtonTitle" />
            </FormControl>
          )}
        />
        <div className={classes.paddingSides} />
        <Controller
          name="leftButtonUrl"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FormControl fullWidth>
              <InputLabel htmlFor="leftButtonUrl">
                Left Button Url (If you don't have url for this button, please
                leave it empty)
              </InputLabel>
              <Input {...field} id="leftButtonUrl" />
            </FormControl>
          )}
        />
      </div>
      <div className={classes.margin} />
      <div className={classes.doubleForms}>
        <Controller
          name="rightButtonTitle"
          control={control}
          defaultValue="View Codes"
          render={({ field }) => (
            <FormControl fullWidth>
              <InputLabel htmlFor="rightButtonTitle">
                Right Button Title
              </InputLabel>
              <Input {...field} id="rightButtonTitle" />
            </FormControl>
          )}
        />
        <div className={classes.paddingSides} />
        <Controller
          name="rightButtonUrl"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FormControl fullWidth>
              <InputLabel htmlFor="rightButtonUrl">
                Right Button Url (If you don't have url for this button, please
                leave it empty)
              </InputLabel>
              <Input {...field} id="rightButtonUrl" />
            </FormControl>
          )}
        />
      </div>
      <div className={classes.margin} />
      <Box className={classes.positionRight}>
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
