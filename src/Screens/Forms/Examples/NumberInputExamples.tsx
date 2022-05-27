import { type FC } from 'react';

import { NumberInput, CopyPastas, P, type PastaItemInterface } from 'src/Library';

const numberInputItem: PastaItemInterface = (El, about, props: any) => ({
  PastaEl: <El {...props} />,
  children: <P>{about}</P>,
});

const NumberInputCopyPastaConfig = [
  numberInputItem(NumberInput, 'NumberInput Element', {
    label: 'Donation',
    value: 1234567,
    ariaLabel: 'ima aria-label',
  }),
];

export const NumberInputExamples: FC<any> = () => (
  <CopyPastas title="NumberInput Examples" pastaConfig={NumberInputCopyPastaConfig} />
);
