/* MATERIAL UI */

// COMPONENTS
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Chip from '@material-ui/core/Chip';

/* MAIN FUNCTION */
export default function FormInputText(props: {
  formId: any;
  defaultValue?: String;
  label?: String;
  helperText?: String;
  tags: Array<String>;
  setTags: any;
  options: Array<String>;
}) {
  const { formId, label = '', tags, setTags, options, helperText } = props;

  return (
    <Autocomplete
      fullWidth
      freeSolo
      multiple
      id={formId}
      value={tags}
      onChange={(_, newValue) => {
        setTags([...newValue]);
      }}
      options={options}
      getOptionLabel={(option: String) => option}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip label={option} {...getTagProps({ index })} />
        ))
      }
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant="outlined"
          placeholder="Favorites"
          helperText={helperText}
        />
      )}
    />
  );
}
