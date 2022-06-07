import { type FC } from 'react';

import { NumberInput, CopyPastas, P, type PastaItemInterface } from 'src/Library';

const numberInputItem: PastaItemInterface = (El, about, props: any) => ({
  PastaEl: <El {...props} />,
  children: <P>{about}</P>,
});

const NumberInputCopyPastaConfig = [
  numberInputItem(NumberInput, 'NumberInput Element', {
    label: 'Total errors in the last 24 hours',
    description: 'Gotta catchem all',
    steps: 1,
    value: 1234567,
  }),

  numberInputItem(NumberInput, 'NumberInput Element', {
    label: 'Donate to your local opens source developer',
    checkValidity: value => value === 'this will always show errorMessage',
    errorMessage: 'checkValidity returns false so errorMessage is displayed',
    prefix: '$',
    steps: 100,
    value: 995,
  }),
];

export const NumberInputExamples: FC<any> = () => (
  <CopyPastas title="NumberInput Examples" pastaConfig={NumberInputCopyPastaConfig} />
);
