import { type FC } from 'react';

import { RadioGroup, CopyPastas, P, type PastaItemInterface } from 'src/Library';

const radioGroupItem: PastaItemInterface = (El, about, props = {}) => ({
  PastaEl: <El {...props} />,
  children: <P>{about}</P>,
});

const RadioGroupCopyPastaConfig = [
  radioGroupItem(RadioGroup, 'RadioGroup Element', {
    label: 'Select an option',
    radios: [
      {
        value: 'radio 1',
        displayValue: 'Selection 1',
      },
      {
        value: 'radio 2',
      },
    ],
  }),
];

export const RadioGroupExamples: FC<any> = () => (
  <CopyPastas title="RadioGroup Examples" pastaConfig={RadioGroupCopyPastaConfig} />
);
