import { useRef, useState, type FC } from 'react';
import { useId, useTextField } from 'react-aria';
import NumberFormat from 'react-number-format';

import { PlusIcon, MinusIcon, CircleCheckIcon, Label, Section, Small, Strong } from 'src/Library';

export interface NumberInputInterface {
  [x: string]: any;
  description?: string;
  errorMessage?: string;
  checkValidity?: (value: string | number) => boolean;
  displayType?: 'input' | 'text';
  inputId?: string;
  labelId?: string;
  minusId?: string;
  plusId?: string;
  prefix?: string;
  steps?: number;
  suffix?: string;
}

export const NumberInput: FC<NumberInputInterface> = ({
  checkValidity,
  displayType = 'input',
  inputId,
  labelId,
  minusId,
  plusId,
  prefix,
  steps = 1,
  suffix,
  value,
  ...props
}) => {
  if (checkValidity && !props.errorMessage)
    throw new Error('errorMessage: string is required when checkValidity is provided');
  const [useValue, setValue] = useState(value);
  const [isFocused, setIsFocused] = useState(false);

  const tempValue = useRef<{ [x: string]: any }>({});
  const inputRef = useRef<HTMLInputElement>(null);
  const plusRef = useRef<HTMLButtonElement>(null);
  const minusRef = useRef<HTMLButtonElement>(null);

  const lId = useId(labelId);
  const pId = useId(plusId);
  const mId = useId(minusId);
  const iId = useId(inputId);

  const { labelProps, inputProps, descriptionProps, errorMessageProps } = useTextField(
    props,
    inputRef
  );

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
        {...inputProps}
        {...numberProps}
        aria-labelledby={lId}
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
    <Section className="small-label">
      <Label {...labelProps} id={lId} htmlFor={iId}>
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

      {/* @ts-ignore */}
      <NumberFormat
        onValueChange={(values, { source }) => {
          if (source === 'event') tempValue.current = values;
        }}
        customInput={RenderInput}
        displayType={displayType}
        isNumericString={false}
        prefix={prefix}
        suffix={suffix}
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
      <br />
      {props.errorMessage && checkValidity && !checkValidity(useValue) ? (
        <Strong {...errorMessageProps} css={{ color: 'red', fontSize: '0.7rem' }}>
          {props.errorMessage}
        </Strong>
      ) : null}
      {props.description ? <Small {...descriptionProps}>{props.description}</Small> : null}
    </Section>
  );
};
