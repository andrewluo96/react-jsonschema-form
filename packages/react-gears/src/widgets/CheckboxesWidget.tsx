import { useState } from 'react';
import { FormContextType, WidgetProps, RJSFSchema, StrictRJSFSchema } from '@rjsf/utils';
import { CheckboxGroup } from '@appfolio/react-gears';

function CheckboxesWidget<T = any, S extends StrictRJSFSchema = RJSFSchema, F extends FormContextType = any>({
  options: { enumOptions, enumDisabled },
  onChange,
}: WidgetProps<T, S, F>) {
  const [selected, setSelected] = useState([]);

  const handleChange = (values) => {
    setSelected(values);
    onChange(values);
  };

  const options = Array.isArray(enumOptions)
    ? enumOptions.map((e) => ({
        label: e.label,
        value: e.value,
        disabled: enumDisabled?.indexOf(e.value) === -1,
      }))
    : [];

  return <CheckboxGroup options={options} onChange={handleChange} selected={selected} />;
}

export default CheckboxesWidget;
