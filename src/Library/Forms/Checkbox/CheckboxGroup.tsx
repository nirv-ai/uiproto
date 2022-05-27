import { type FC, type ReactNode } from 'react';
import { useCheckboxGroup } from 'react-aria';
import { useCheckboxGroupState } from 'react-stately';

import { Span } from 'src/Library';
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
      <Span ariaRole="presentation" {...labelProps}>
        {label}
      </Span>
      <CheckboxGroupContext.Provider value={state} children={children} />
    </fieldset>
  );
};
