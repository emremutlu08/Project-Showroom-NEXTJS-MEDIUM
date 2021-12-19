/* MATERIAL UI */

// COMPONENTS
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

/* COMPONENTS */
import { Controller } from 'react-hook-form';

/* MAIN FUNCTION */
export default function FormInputText(props: {
  formId: any;
  control: any;
  defaultValue?: any;
  helperText?: any;
  label?: any;
  required?: boolean;
  fullWidth?: boolean;
  variant?: string;
  error?: boolean;
  type?: string;
}) {
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
      render={({ field }: any) => (
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
