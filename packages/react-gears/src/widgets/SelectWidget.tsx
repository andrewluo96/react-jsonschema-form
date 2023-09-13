import { FormContextType, RJSFSchema, StrictRJSFSchema, WidgetProps } from '@rjsf/utils';
import { Combobox } from '@appfolio/react-gears';

function SelectWidget<T = any, S extends StrictRJSFSchema = RJSFSchema, F extends FormContextType = any>({
  options,
  value,
  required,
  disabled,
  readonly,
  multiple = false,
  onChange,
  placeholder,
}: WidgetProps<T, S, F>) {
  const { enumOptions, enumDisabled } = options;

  const selectOptions = Array.isArray(enumOptions)
    ? enumOptions.map((e) => ({
        label: e.label,
        value: e.value,
        disabled: enumDisabled?.indexOf(e.value) === -1,
      }))
    : [];

  return (
    <div>
      <Combobox
        options={selectOptions}
        onChange={onChange}
        disabled={disabled || readonly}
        multi={multiple}
        required={required}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
}

export default SelectWidget;
