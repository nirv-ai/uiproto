import { useRef, FC } from 'react';
import { useSwitch, VisuallyHidden } from 'react-aria';
import { useToggleState } from 'react-stately';

import { ToggleOffIcon, ToggleOnIcon, Label } from 'src/Library';

export interface SwitchInterface {
  [x: string]: any;
  ariaLabel: string;
}
export const Switch: FC<SwitchInterface> = ({ ariaLabel, title, ...props }) => {
  const sendProps = {
    ...props,
    'aria-label': ariaLabel,
  };
  const state = useToggleState(sendProps as any);
  const ref = useRef<HTMLInputElement>(null);
  const { inputProps } = useSwitch(sendProps, state, ref);

  const handleClick = e => {
    e.preventDefault();
    state.toggle();
  };
  return (
    <Label onClick={handleClick} title={title}>
      <VisuallyHidden>
        <input {...inputProps} ref={ref} />
      </VisuallyHidden>
      {state.isSelected ? <ToggleOnIcon /> : <ToggleOffIcon />}
      {props.children}
    </Label>
  );
};
