import { useRef, useState, type FC } from 'react';
import { useNumberField, useLocale, useButton } from 'react-aria';
import { useNumberFieldState } from 'react-stately';

export interface NumberInputInterface {
  [x: string]: any;
}

export const NumberInput: FC<NumberInputInterface> = props => {
  const { locale } = useLocale();

  const [value, setValue] = useState(6);

  const sendProps = {
    ...props,
    value,
    onChange: setValue,
  };
  const state = useNumberFieldState({ ...sendProps, locale });
  const inputRef = useRef();
  const incrRef = useRef();
  const decRef = useRef();

  const { labelProps, groupProps, inputProps, incrementButtonProps, decrementButtonProps } =
    useNumberField(sendProps, state, inputRef as any);

  const { buttonProps: incrementProps } = useButton(incrementButtonProps, incrRef as any);
  const { buttonProps: decrementProps } = useButton(decrementButtonProps, decRef as any);

  return (
    <div>
      <label {...labelProps}>{props.label}</label>
      <div {...groupProps}>
        {/* @ts-ignore */}
        <button {...decrementProps} ref={decRef}>
          -
        </button>
        {/* @ts-ignore */}
        <input {...inputProps} ref={inputRef} />
        {/* @ts-ignore */}
        <button {...incrementProps} ref={incrRef}>
          +
        </button>
      </div>
    </div>
  );
};
