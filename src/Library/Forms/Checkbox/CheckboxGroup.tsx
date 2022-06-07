import { type FC, type ReactNode } from 'react';
import { useCheckboxGroup } from 'react-aria';
import { useCheckboxGroupState } from 'react-stately';

import { Label } from 'src/Library';
import { CheckboxGroupContext } from './CheckboxGroupContext';

export interface CheckboxGroupInterface {
  [x: string]: any;
  children: ReactNode;
  label: string;
}

// TODO: (noah) dont use children, check how we render in RadioGroup
export const CheckboxGroup: FC<CheckboxGroupInterface> = props => {
  const { children, label } = props;
  const state = useCheckboxGroupState(props);
  const { groupProps, labelProps } = useCheckboxGroup(props, state);

  return (
    <fieldset {...groupProps} className="small-label">
      <Label ariaRole="presentation" {...labelProps}>
        {label}
      </Label>
      <CheckboxGroupContext.Provider value={state} children={children} />
    </fieldset>
  );
};
