import { type FC } from 'react';

import { ToggleSwitch, CopyPastas, P, type PastaItemInterface } from 'src/Library';

const toggleItem: PastaItemInterface = (El, about, props: any) => ({
  PastaEl: <El {...props} />,
  children: <P>{about}</P>,
});

const ToggleSwitchCopyPastaConfig = [
  toggleItem(ToggleSwitch, 'ToggleSwitch Element', {
    ariaLabel: 'ima aria-label',
    title: 'show me on hover',
  }),
];

export const ToggleExamples: FC<any> = () => (
  <CopyPastas title="Toggle Examples" pastaConfig={ToggleSwitchCopyPastaConfig} />
);
