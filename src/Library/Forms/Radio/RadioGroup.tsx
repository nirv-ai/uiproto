import { type FC } from 'react';
import { useRadioGroup } from 'react-aria';
import { useRadioGroupState } from 'react-stately';

import { getClass, Label, Section } from 'src/Library';
import { RadioGroupContext } from './RadioGroupContext';
import { Radio, type RadioInterface } from './Radio';

export interface RadioGroupInterface {
  radios: RadioInterface[];
  className?: string;
  [x: string]: any;
}

export const RadioGroup: FC<RadioGroupInterface> = ({
  children,
  className,
  label,
  radios,
  ...props
}) => {
  const state = useRadioGroupState(props);
  const { radioGroupProps, labelProps } = useRadioGroup(props, state);

  const useClass = getClass(className, 'small-label', 'radio-group');

  return (
    <Section {...radioGroupProps} ariaRole="radiogroup" className={useClass}>
      <Label ariaRole="presentation">{label}</Label>
      <RadioGroupContext.Provider value={state}>
        {radios.map(radio => (
          <Radio key={radio.value} labelProps={labelProps} {...radio} />
        ))}
      </RadioGroupContext.Provider>
    </Section>
  );
};
RadioGroup.displayName = 'RadioGroup';
