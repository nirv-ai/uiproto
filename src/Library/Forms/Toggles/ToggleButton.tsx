import { useRef, type FC } from 'react';
import { useToggleButton } from 'react-aria';
import { useToggleState } from 'react-stately';

import { ButtonInterface, TextWithRef } from 'src/Library';

export const ToggleButton: FC<ButtonInterface> = ({
  children,
  ElType = 'button' as const,
  ...props
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const state = useToggleState(props as any);
  const { buttonProps, isPressed } = useToggleButton(
    {
      ...props,
      elementType: ElType,
    },
    state,
    /* @ts-ignore */
    ref
  );

  const TODOcss = {
    color: isPressed
      ? state.isSelected
        ? 'darkblue'
        : 'darkgreen'
      : state.isSelected
      ? 'blue'
      : 'green',
  };

  return (
    <TextWithRef
      ariaRole="button"
      {...props}
      {...buttonProps}
      ref={ref}
      ElType={ElType}
      css={TODOcss}
    >
      {children}
    </TextWithRef>
  );
};
ToggleButton.displayName = 'ToggleButton';
