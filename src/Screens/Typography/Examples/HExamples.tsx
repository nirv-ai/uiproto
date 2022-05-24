import React, { type FC } from 'react';

import { CopyPastas, H1, H2, H3, H4, H5, H6, type PastaItemInterface } from 'src/Library';

const hItem: PastaItemInterface = (El, about) => ({
  PastaEl: <El>The world is full of objects, more or less interesting.</El>,
  children: <p>{about}</p>,
});

const HCopyPastaConfig = [
  hItem(H1, 'H1 Element'),
  hItem(H2, 'H2 Element'),
  hItem(H3, 'H3 Element'),
  hItem(H4, 'H4 Element'),
  hItem(H5, 'H5 Element'),
  hItem(H6, 'H6 Element'),
];

export const HExamples: FC<any> = () => (
  <CopyPastas title="Header Examples" pastaConfig={HCopyPastaConfig} />
);
