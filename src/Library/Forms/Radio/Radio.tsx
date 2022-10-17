import { useContext, useRef, type FC } from 'react';
import { VisuallyHidden, useFocusRing, useRadio } from 'react-aria';

import { getClass, CircleCheckIcon, CircleIcon, Label } from 'src/Library';
import { RadioGroupContext } from './RadioGroupContext';

export interface RadioInterface {
  [x: string]: any;
  className?: string;
  displayValue?: string;
  value: string;
}

export const Radio: FC<RadioInterface> = ({
  children,
  className,
  displayValue,
  labelProps,
  ...props
}) => {
  const state = useContext(RadioGroupContext);
  const ref = useRef(null);
  // @ts-ignore
  const { inputProps } = useRadio(props, state, ref);
  const { isFocusVisible, focusProps } = useFocusRing();

  const useClass = getClass(className, isFocusVisible && 'focus-ring', 'radio');

  // @see https://bugs.webkit.org/show_bug.cgi?id=219188
  // ^ ElType === button requires double click
  const RenderRadio =
    state.selectedValue === props.value ? (
      <CircleCheckIcon className={useClass} ElType="span" ariaRole="radio" aria-hidden="true" />
    ) : (
      <CircleIcon className={useClass} ElType="span" ariaRole="radio" aria-hidden="true" />
    );
  return (
    <Label {...props.labelProps}>
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={ref} className={useClass} />
      </VisuallyHidden>
      {RenderRadio}
      {displayValue || props.value}
    </Label>
  );
};
Radio.displayName = 'Radio';
