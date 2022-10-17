import { useRef, type FC } from 'react';
import { useButton } from 'react-aria';

import { TextWithRef, type TextInterface } from 'src/Library';

export interface ButtonInterface extends TextInterface {
  [x: string]: any;
  renderProps?: { [x: string]: any };
  ariaRefProps?: { [x: string]: any };
  type?: 'button' | 'submit' | 'reset';
}

export const Button: FC<ButtonInterface> = ({
  ariaRefProps = {},
  ariaRole,
  children,
  className,
  ElType = 'button',
  forwardedRef,
  type = 'button',
  ...props
}) => {
  if (ElType === 'span' && !ariaRole) {
    console.error('\n\n props before error', props);
    throw new Error('Button.ElType = span requires an ariaRole');
  }
  const ref = useRef<HTMLButtonElement>();
  const thisRef = forwardedRef || ref;
  const { buttonProps } = useButton(
    {
      ...props,
      ...ariaRefProps,
      // @ts-ignore
      type,
      // @ts-ignore
      elementType: ElType,
    },
    /* @ts-ignore */
    thisRef
  );

  return (
    <TextWithRef {...buttonProps} {...props} ref={thisRef} ElType={ElType} ariaRole={ariaRole}>
      {children}
    </TextWithRef>
  );
};
Button.displayName = 'Button';

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
