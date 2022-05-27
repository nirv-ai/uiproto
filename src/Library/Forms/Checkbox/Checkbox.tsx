import { GrCheckbox, GrCheckboxSelected } from 'react-icons/gr';
import { useCheckbox, useId, VisuallyHidden, useFocusRing, useCheckboxGroupItem } from 'react-aria';
import { useRef, useContext, forwardRef, type FC, type ReactNode } from 'react';
import { useToggleState } from 'react-stately';

import { getClass, Label } from 'src/Library';
import { CheckboxGroupContext } from './CheckboxGroupContext';

// @see https://react-spectrum.adobe.com/react-aria/useCheckbox.html
export interface CheckboxBaseInterface {
  state?: { [x: string]: any };
  ariaLabel?: string;
  checkboxLast?: boolean;
  CheckedEl?: FC<any>;
  children?: ReactNode;
  className?: string;
  defaultSelected?: boolean;
  id?: string;
  label?: string;
  UncheckedEl?: FC<any>;
  value?: string | number | readonly string[];
}

export const CheckboxBase = forwardRef(
  (
    {
      ariaLabel,
      checkboxLast,
      CheckedEl = GrCheckboxSelected,
      children,
      className,
      label,
      state = {},
      UncheckedEl = GrCheckbox,
      ...props
    }: CheckboxBaseInterface,
    ref
  ) => {
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

    const { isFocusVisible, focusProps } = useFocusRing();

    /* @ts-ignore */
    const isDisabled = state?.isDisabled || props?.isDisabled;

    const useClass = getClass(className, isDisabled && 'disabled', 'checkbox');
    const focusRing = getClass(isFocusVisible && 'focus-ring', 'checkbox');

    /* @ts-ignore */
    const isSelected = () =>
      typeof state.isSelected === 'function' ? state.isSelected(props.value) : state.isSelected;

    const RenderCheckboxes = isSelected() ? (
      <CheckedEl className={focusRing} />
    ) : (
      <UncheckedEl className={focusRing} />
    );

    // TODO: (noah) logic is far too wet, refactor
    return children || label ? (
      <Label>
        <VisuallyHidden>
          {/* @ts-ignore */}
          <input {...props} {...focusProps} ref={ref} className={useClass} />
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
          {/* @ts-ignore */}
          <input {...props} {...focusProps} ref={ref} className={useClass} />
        </VisuallyHidden>
        {isSelected() ? (
          <CheckedEl onClick={state.toggle} className={focusRing} />
        ) : (
          <UncheckedEl onClick={state.toggle} className={focusRing} />
        )}
      </>
    );
  }
);
CheckboxBase.displayName = 'CheckboxBase';

export interface CheckboxInterface extends Omit<CheckboxBaseInterface, 'state | ref | value'> {
  value: string;
}

export const Checkbox: FC<CheckboxInterface> = ({ ariaLabel, id, label, ...props }) => {
  const checkboxId = useId(id);

  const sendProps = {
    ...props,
    'aria-label': ariaLabel || label,
    id: checkboxId,
  };

  const state = useToggleState(sendProps);
  const ref = useRef<HTMLInputElement>(null);
  const { inputProps } = useCheckbox(sendProps, state, ref as any);

  return (
    <CheckboxBase
      ariaLabel={ariaLabel}
      label={label}
      {...props}
      {...inputProps}
      state={state}
      ref={ref}
    />
  );
};
Checkbox.displayName = 'Checkbox';

export const CheckboxInGroup: FC<CheckboxInterface> = ({ id, ariaLabel, label, ...props }) => {
  const state = useContext(CheckboxGroupContext);
  const ref = useRef<HTMLInputElement>(null);
  const checkboxId = useId(id);

  const sendProps = {
    ...props,
    'aria-label': ariaLabel || label,
    id: checkboxId,
  };

  const { inputProps } = useCheckboxGroupItem(sendProps, state as any, ref);

  /* @ts-ignore */
  return (
    <CheckboxBase
      ariaLabel={ariaLabel}
      label={label}
      {...props}
      {...inputProps}
      state={state}
      ref={ref}
    />
  );
};
CheckboxInGroup.displayName = 'CheckboxInGroup';
