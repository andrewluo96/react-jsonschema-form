import { FocusEvent } from 'react';
import {
  ariaDescribedByIds,
  labelValue,
  FormContextType,
  RJSFSchema,
  StrictRJSFSchema,
  WidgetProps,
} from '@rjsf/utils';

import { DateInput } from '@appfolio/react-gears';

export default function DateWidget<T = any, S extends StrictRJSFSchema = RJSFSchema, F extends FormContextType = any>({
  id,
  required,
  label,
  hideLabel,
  value,
  onChange,
  onBlur,
  onFocus,
  placeholder,
}: WidgetProps<T, S, F>) {
  const _onBlur = ({ target: { value } }: FocusEvent<HTMLInputElement>) => onBlur(id, value);
  const _onFocus = ({ target: { value } }: FocusEvent<HTMLInputElement>) => onFocus(id, value);

  return (
    <DateInput
      id={id}
      className='mb-1'
      placeholder={placeholder}
      required={required}
      // @ts-expect-error todo: TS2322: Type 'string | false | ReactElement<any, string | JSXElementConstructor<any>> | undefined' is not assignable to type 'string | undefined'.
      label={labelValue(label, hideLabel)}
      onChange={onChange}
      onBlur={_onBlur}
      onFocus={_onFocus}
      value={value}
      aria-describedby={ariaDescribedByIds<T>(id)}
    />
  );
}
