import { useCheckbox, useId, VisuallyHidden, useFocusRing, useCheckboxGroupItem } from 'react-aria';
import { useRef, useContext, forwardRef, type FC, type ReactNode } from 'react';
import { useToggleState } from 'react-stately';

import { getClass, Label, CheckedIcon, UncheckedIcon } from 'src/Library';
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
      CheckedEl = CheckedIcon,
      children,
      className,
      label,
      state = {},
      UncheckedEl = UncheckedIcon,
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

    const useClass = getClass(
      className,
      isDisabled && 'disabled',
      isFocusVisible && 'focus-ring',
      'checkbox'
    );

    /* @ts-ignore */
    const isSelected = () =>
      typeof state.isSelected === 'function' ? state.isSelected(props.value) : state.isSelected;

    // @see https://bugs.webkit.org/show_bug.cgi?id=219188
    // ^ ElType === button requires double click
    const RenderCheckboxes = isSelected() ? (
      <CheckedEl className={useClass} ElType="span" ariaRole="checkbox" aria-hidden="true" />
    ) : (
      <UncheckedEl className={useClass} ElType="span" ariaRole="checkbox" aria-hidden="true" />
    );

    // TODO: (noah) logic is far too wet, refactor
    // TODO: (noah) pretty sure putting a className on a visually hidden input makes 0 sense
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
          <CheckedEl onClick={state.toggle} className={useClass} aria-hidden="true" />
        ) : (
          <UncheckedEl onClick={state.toggle} className={useClass} aria-hidden="true" />
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

  // @ts-ignore
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

  // @ts-ignore
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
