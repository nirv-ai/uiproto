import { useRef, useState, type FC } from 'react';
import { useNumberField, useLocale /*, useId */ } from 'react-aria';
import { useNumberFieldState } from 'react-stately';

import { PlusIcon, MinusIcon, Label, Section } from 'src/Library';

export interface NumberInputInterface {
  [x: string]: any;
  inputId?: string;
  labelId?: string;
  minusId?: string;
  plusId?: string;
}

export const NumberInput: FC<NumberInputInterface> = ({
  labelId,
  plusId,
  minusId,
  inputId,
  ...props
}) => {
  const { locale } = useLocale();

  const [value, setValue] = useState(6);

  const handleChange = (value: number) => {
    console.info('\n\n new value', value);
    console.info('\n\n state', state, setValue);

    if (value) setValue(value);
  };
  const sendProps = {
    ...props,
    value,
    onChange: handleChange,
  };
  const state = useNumberFieldState({ ...sendProps, locale });
  const inputRef = useRef();
  const incrRef = useRef();
  const decRef = useRef();

  // const lId = useId(labelId);
  // const pId = useId(plusId);
  // const mId = useId(minusId);
  // const iId = useId(inputId);

  const { labelProps, groupProps, inputProps, incrementButtonProps, decrementButtonProps } =
    useNumberField(sendProps, state, inputRef as any);

  const { onBlur, onFucus, ...gProps } = groupProps;
  const {
    // 'aria-controls': pblah,
    // onPressStart: pStart,
    // onPressEnd: pEnd,
    ...plusProps
  } = incrementButtonProps;
  const {
    // 'aria-controls': mblah,
    // onPressStart: mStart,
    // onPressEnd: mEnd,
    ...minusProps
  } = decrementButtonProps;

  console.info({
    plusProps,
    minusProps,
    inputProps,
    gProps,
    labelProps,
  });

  const plusClick = event => {
    event.preventDefault();
    state.increment();
  };

  const minusClick = event => {
    event.preventDefault();
    state.decrement();
  };

  return (
    <Section {...gProps}>
      <Label {...labelProps}>{props.label}</Label>

      {/* @ts-ignore */}
      <MinusIcon
        ariaRefProps={minusProps}
        forwardedRef={decRef}
        ElType="span"
        ariaRole="button"
        onClick={minusClick}
      />
      {/* @ts-ignore */}
      <input {...inputProps} ref={inputRef} disabled />
      {/* @ts-ignore */}
      <PlusIcon
        ariaRefProps={plusProps}
        ElType="span"
        forwardedRef={incrRef}
        ariaRole="button"
        onClick={plusClick}
      />
    </Section>
  );
};
