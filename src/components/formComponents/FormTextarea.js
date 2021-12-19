/* MATERIAL UI */

// COMPONENTS
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import FormControl from '@material-ui/core/FormControl';

/* COMPONENTS */
import { Controller } from 'react-hook-form';

/* MAIN FUNCTION */
export default function FormInputText(props) {
  const { formId, control, defaultValue = '', placeholder = '' } = props;

  return (
    <Controller
      name={formId}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <FormControl fullWidth>
          <TextareaAutosize
            {...field}
            id={formId}
            placeholder={placeholder}
            minRows={3}
            aria-label={placeholder}
          />
        </FormControl>
      )}
    />
  );
}
