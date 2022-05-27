import { useRef, type FC, type ReactNode } from 'react';
import { useCheckbox, useId, VisuallyHidden, useFocusRing } from 'react-aria';
import { useToggleState } from 'react-stately';
import { GrCheckbox, GrCheckboxSelected } from 'react-icons/gr';

import { getClass } from 'src/Library';
import { Label } from './Label';

// @see https://react-spectrum.adobe.com/react-aria/useCheckbox.html
export interface CheckboxInterface {
  ariaLabel?: string;
  checkboxLast?: boolean;
  CheckedEl: FC<any>;
  children?: ReactNode;
  className?: string;
  defaultSelected?: boolean;
  id?: string;
  label?: string;
  UncheckedEl: FC<any>;
  value?: string;
}

export const Checkbox: FC<CheckboxInterface> = ({
  ariaLabel,
  checkboxLast,
  CheckedEl = GrCheckboxSelected,
  className,
  id,
  label,
  UncheckedEl = GrCheckbox,
  value,
  ...props
}) => {
  const { children } = props;

  if (label && children) {
    console.error('\n\n props before error', props);
    throw new Error(
      'a checkbox can only have a label or children, did you mean to send the label as a child too?'
    );
  }
  if (!label && !children && !ariaLabel) {
    console.error('\n\n props before error', props);
    throw new Error('oneof ariaLabel, label, or children are required to render a checkbox');
  }

  const checkboxId = useId(id);

  const sendProps = {
    ...props,
    'aria-label': ariaLabel || label,
    id: checkboxId,
    value: typeof value !== 'undefined' ? value : label,
  };

  const state = useToggleState(sendProps);
  const ref = useRef<HTMLInputElement>(null);
  const { inputProps } = useCheckbox(sendProps, state, ref as any);
  const { isFocusVisible, focusProps } = useFocusRing();

  const { isSelected } = state;

  const useClass = getClass(className, 'checkbox');
  const focusRing = getClass(isFocusVisible && 'focus-ring', 'checkbox');

  const RenderCheckboxes = isSelected ? (
    <CheckedEl className={focusRing} />
  ) : (
    <UncheckedEl className={focusRing} />
  );

  return children || label ? (
    <Label>
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={ref} className={useClass} />
      </VisuallyHidden>
      {checkboxLast ? (
        <>
          {children || label}
          {RenderCheckboxes}
        </>
      ) : (
        <>
          {RenderCheckboxes}
          {children || label}
        </>
      )}
    </Label>
  ) : (
    <>
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={ref} className={useClass} />
      </VisuallyHidden>
      {isSelected ? (
        <CheckedEl onClick={state.toggle} className={focusRing} />
      ) : (
        <UncheckedEl onClick={state.toggle} className={focusRing} />
      )}
    </>
  );
};
Checkbox.displayName = 'Checkbox';
