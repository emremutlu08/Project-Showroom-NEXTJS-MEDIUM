/* MATERIAL UI */

// COMPONENTS
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Chip from '@material-ui/core/Chip';

/* MAIN FUNCTION */
export default function FormAutocomplete(props) {
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
      getOptionLabel={(option) => option}
      renderTags={(tagValue, getTagProps) =>
        tagValue.map((option, index) => (
          <Chip key={index} label={option} {...getTagProps({ index })} />
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
