import { useRef } from 'react';
import { ToggleOffIcon, ToggleOnIcon } from 'src/Library';
import { useSwitch, VisuallyHidden } from 'react-aria';
import { useToggleState } from 'react-stately';

export const Switch = props => {
  const state = useToggleState(props);
  const ref = useRef<HTMLInputElement>(null);
  const { inputProps } = useSwitch(props, state, ref);

  return (
    <label style={{ display: 'flex', alignItems: 'center' }}>
      <VisuallyHidden>
        <input {...inputProps} ref={ref} />
      </VisuallyHidden>
      {state.isSelected ? <ToggleOnIcon /> : <ToggleOffIcon />}
      {props.children}
    </label>
  );
};
