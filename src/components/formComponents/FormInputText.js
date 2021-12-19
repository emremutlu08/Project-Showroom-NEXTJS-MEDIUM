/* MATERIAL UI */

// COMPONENTS
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

/* COMPONENTS */
import { Controller } from 'react-hook-form';

/* MAIN FUNCTION */
export default function FormInputText(props) {
  const {
    formId,
    control,
    defaultValue = '',
    helperText = '',
    label = '',
    required,
    fullWidth = true,
    variant = 'standard',
    error = false,
    type = 'string',
  } = props;

  return (
    <Controller
      name={formId}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <FormControl fullWidth={fullWidth}>
          <TextField
            {...field}
            id={formId}
            helperText={helperText}
            label={label}
            required={required}
            variant={variant}
            error={error}
            type={type}
          />
        </FormControl>
      )}
    />
  );
}
