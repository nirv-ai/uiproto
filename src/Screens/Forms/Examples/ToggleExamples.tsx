import { type FC } from 'react';

import { Switch, CopyPastas, P, type PastaItemInterface } from 'src/Library';

const switchItem: PastaItemInterface = (El, about, props: any) => ({
  PastaEl: <El {...props} />,
  children: <P>{about}</P>,
});

const SwitchCopyPastaConfig = [
  switchItem(Switch, 'Switch Element', {
    ariaLabel: 'ima aria-label',
    label: 'Total errors in the last 24 hours',
    steps: 1,
    value: 1234567,
  }),
];

export const ToggleExamples: FC<any> = () => (
  <CopyPastas title="Toggle Examples" pastaConfig={SwitchCopyPastaConfig} />
);
