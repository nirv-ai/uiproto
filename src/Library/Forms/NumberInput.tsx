import { useRef, useState, type FC } from 'react';
import { useId } from 'react-aria';
import NumberFormat from 'react-number-format';

import { PlusIcon, MinusIcon, CircleCheckIcon, Label, Section } from 'src/Library';

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
  ariaLabel,
  ...props
}) => {
  const [useValue, setValue] = useState(props.value);
  const [isFocused, setIsFocused] = useState(false);

  const tempValue = useRef({});
  const inputRef = useRef<HTMLInputElement>(null);
  const plusRef = useRef<HTMLButtonElement>(null);
  const minusRef = useRef<HTMLButtonElement>(null);

  const lId = useId(labelId);
  const pId = useId(plusId);
  const mId = useId(minusId);
  const iId = useId(inputId);

  const plusClick = event => {
    event.preventDefault();
    setValue(useValue + 1);
  };

  const minusClick = event => {
    event.preventDefault();
    setValue(useValue - 1);
  };

  const RenderInput: FC<any> = numberProps => {
    return (
      <input
        {...props}
        {...numberProps}
        onClick={() => setIsFocused(true)}
        key="wtf"
        autoFocus={isFocused}
        id={iId}
        ref={inputRef}
      />
    );
  };
  const handleCheckClick = e => {
    e.preventDefault();
    /* @ts-ignore */
    setValue(tempValue.current?.floatValue);
    setIsFocused(false);
  };

  return (
    <Section>
      <Label id={lId}>
        {props.label}
        {isFocused ? (
          <>
            <CircleCheckIcon onClick={e => handleCheckClick(e)} />
          </>
        ) : null}
      </Label>

      {/* @ts-ignore */}
      <MinusIcon id={mId} forwardedRef={minusRef} ariaRole="button" onClick={minusClick} />
      {/* @ts-ignore */}
      <NumberFormat
        onValueChange={(values, { source }) => {
          if (source === 'event') {
            tempValue.current = values;
          }
        }}
        displayType="input"
        isNumericString={false}
        prefix="$"
        customInput={RenderInput}
        thousandSeparator
        value={useValue}
      />
      {/* @ts-ignore */}
      <PlusIcon id={pId} forwardedRef={plusRef} ariaRole="button" onClick={plusClick} />
    </Section>
  );
};
