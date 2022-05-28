import { useRef, type FC } from 'react';
import { useToggleButton } from 'react-aria';
import { useToggleState } from 'react-stately';

import { ButtonInterface, TextWithRef } from 'src/Library';

export const ToggleButton: FC<ButtonInterface> = ({ children, ElType = 'button', ...props }) => {
  const ref = useRef<HTMLButtonElement>();
  const state = useToggleState(props as any);
  const { buttonProps /*, isPressed */ } = useToggleButton(
    {
      ...props,
      elementType: ElType,
    },
    state,
    /* @ts-ignore */
    ref
  );

  return (
    <TextWithRef {...buttonProps} {...props} ref={ref} ElType={ElType}>
      {children}
    </TextWithRef>
  );
};
ToggleButton.displayName = 'ToggleButton';
