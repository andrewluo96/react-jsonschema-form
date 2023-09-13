import { useState } from 'react';
import { FormContextType, RJSFSchema, StrictRJSFSchema, WidgetProps } from '@rjsf/utils';
import { RadioGroup } from '@appfolio/react-gears';

export default function RadioWidget<T = any, S extends StrictRJSFSchema = RJSFSchema, F extends FormContextType = any>({
  options,
  onChange,
}: WidgetProps<T, S, F>) {
  const { enumOptions, enumDisabled } = options;

  const [selection, setSelection] = useState(undefined);

  const handleChange = (value) => {
    setSelection(value);
    onChange(value);
  };

  const radioOptions = Array.isArray(enumOptions)
    ? enumOptions.map((e) => ({
        label: e.label,
        value: e.value,
        disabled: enumDisabled?.indexOf(e.value) === -1,
      }))
    : [];

  return <RadioGroup options={radioOptions} selected={selection} onChange={handleChange} />;
}
