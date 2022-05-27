import { type FC, type ReactNode } from 'react';
import { useCheckboxGroup } from 'react-aria';
import { useCheckboxGroupState } from 'react-stately';

import { CheckboxGroupContext } from './CheckboxGroupContext';

export interface CheckboxGroupInterface {
  [x: string]: any;
  children: ReactNode;
  label: string;
}

export const CheckboxGroup: FC<CheckboxGroupInterface> = props => {
  const { children, label } = props;
  const state = useCheckboxGroupState(props);
  const { groupProps, labelProps } = useCheckboxGroup(props, state);

  return (
    <fieldset {...groupProps}>
      <span {...labelProps}>{label}</span>
      <CheckboxGroupContext.Provider value={state} children={children} />
    </fieldset>
  );
};
