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
  steps?: number;
}

export const NumberInput: FC<NumberInputInterface> = ({
  labelId,
  plusId,
  minusId,
  inputId,
  ariaLabel,
  steps = 5,
  ...props
}) => {
  const [useValue, setValue] = useState(props.value);
  const [isFocused, setIsFocused] = useState(false);

  const tempValue = useRef<{ [x: string]: any }>({});
  const inputRef = useRef<HTMLInputElement>(null);
  const plusRef = useRef<HTMLButtonElement>(null);
  const minusRef = useRef<HTMLButtonElement>(null);

  const lId = useId(labelId);
  const pId = useId(plusId);
  const mId = useId(minusId);
  const iId = useId(inputId);

  const plusClick = event => {
    event.preventDefault();
    setValue(useValue + steps);
  };

  const minusClick = event => {
    event.preventDefault();
    setValue(useValue - steps);
  };

  const RenderInput: FC<any> = numberProps => {
    return (
      <input
        {...props}
        {...numberProps}
        autoFocus={isFocused}
        id={iId}
        key={iId}
        onClick={() => setIsFocused(true)}
        ref={inputRef}
      />
    );
  };
  const handleCheckClick = e => {
    e.preventDefault();
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

      <MinusIcon
        disabled={isFocused}
        id={mId}
        forwardedRef={minusRef}
        ariaRole="button"
        onClick={minusClick}
      />

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

      <PlusIcon
        id={pId}
        forwardedRef={plusRef}
        ariaRole="button"
        onClick={plusClick}
        disabled={isFocused}
      />
    </Section>
  );
};
