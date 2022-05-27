import { useRef, useCallback, type FC, type ReactNode } from 'react';
import { useCheckbox, useId } from 'react-aria';
import { useToggleState } from 'react-stately';

import { getClass } from 'src/Library';
import { Label } from './Label';

// @see https://react-spectrum.adobe.com/react-aria/useCheckbox.html
export interface CheckboxInterface {
  ariaLabel?: string;
  checkboxLast?: boolean;
  children?: ReactNode;
  className?: string;
  defaultSelected?: boolean;
  id?: string;
  label?: string;
  value?: string;
}

export const Checkbox: FC<CheckboxInterface> = ({
  ariaLabel,
  checkboxLast,
  className,
  id,
  label,
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

  const useClass = getClass(className, 'checkbox');

  const RenderCheckbox = useCallback(
    () => <input {...inputProps} ref={ref} className={useClass} />,
    [inputProps, useClass, ref]
  );

  return children || label ? (
    <Label>
      {checkboxLast ? (
        <>
          {children || label}
          <RenderCheckbox />
        </>
      ) : (
        <>
          <RenderCheckbox />
          {children || label}
        </>
      )}
    </Label>
  ) : (
    <input {...inputProps} ref={ref} className={useClass} />
  );
};
Checkbox.displayName = 'Checkbox';
