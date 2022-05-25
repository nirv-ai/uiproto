import { createRef, type FC } from 'react';
import { useButton, useToggleButton, useVisuallyHidden } from 'react-aria';
import { useToggleState } from 'react-stately';

import { TextWithRef, Text, type TextInterface } from './Text';
import { getClass } from 'src/Library/Utils';

export interface ButtonInterface extends TextInterface {
  [x: string]: any;
  renderProps?: { [x: string]: any };
  type?: 'button' | 'submit' | 'reset';
}

export const Button: FC<ButtonInterface> = ({
  children,
  ElType = 'button',
  type = 'button',
  ...props
}) => {
  const ref = createRef<HTMLButtonElement>();
  const { buttonProps } = useButton(
    {
      ...props,
      type,
      elementType: ElType,
    },
    ref
  );

  return (
    <TextWithRef {...buttonProps} {...props} ref={ref} ElType={ElType}>
      {children}
    </TextWithRef>
  );
};
Button.displayName = 'Button';

export interface IconInterface extends ButtonInterface {
  desc: string;
}

export const IconButton: FC<IconInterface> = ({ desc, children, ...props }) => {
  const { visuallyHiddenProps } = useVisuallyHidden();

  const useClass = getClass(props.className, 'icon');

  return (
    <Button {...props} className={useClass}>
      {children}
      <Text ElType="mark" {...visuallyHiddenProps}>
        {desc}
      </Text>
    </Button>
  );
};
IconButton.displayName = 'IconButton';

export interface FormButtonInterface extends ButtonInterface {
  value?: string;
  name?: string;
}

export const SubmitButton: FC<FormButtonInterface> = ({ name, value, ...props }) => {
  if (!value || !name) throw new Error('You must provide a value and a name for a submit button');

  return <Button {...props} type="submit" value={value} name={name} />;
};
SubmitButton.displayName = 'SubmitButton';

export const ResetButton: FC<FormButtonInterface> = props => {
  return <Button {...props} type="reset" />;
};
ResetButton.displayName = 'ResetButton';

export const Toggle: FC<ButtonInterface> = ({ children, ElType = 'button', ...props }) => {
  const ref = createRef<HTMLButtonElement>();
  const state = useToggleState(props as any);
  const { buttonProps /*, isPressed */ } = useToggleButton(
    {
      ...props,
      elementType: ElType,
    },
    state,
    ref
  );

  return (
    <TextWithRef {...buttonProps} {...props} ref={ref} ElType={ElType}>
      {children}
    </TextWithRef>
  );
};
Toggle.displayName = 'Toggle';
