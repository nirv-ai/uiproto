import { type FC } from 'react';

import { NumberInput, CopyPastas, P, type PastaItemInterface } from 'src/Library';

const numberInputItem: PastaItemInterface = (El, about, props: any) => ({
  PastaEl: <El {...props} />,
  children: <P>{about}</P>,
});

const NumberInputCopyPastaConfig = [
  numberInputItem(NumberInput, 'NumberInput Element', {
    label: 'Total errors in the last 24 hours',
    value: 1234567,
    ariaLabel: 'ima aria-label',
  }),

  numberInputItem(NumberInput, 'NumberInput Element', {
    label: 'Donate to your local opens source developer',
    value: 995,
    prefix: '$',
    ariaLabel: 'ima aria-label',
  }),
];

export const NumberInputExamples: FC<any> = () => (
  <CopyPastas title="NumberInput Examples" pastaConfig={NumberInputCopyPastaConfig} />
);
