import { type FC } from 'react';
import styled from '@emotion/styled';

import { CopyPastas, type PastaItemInterface } from 'src/Library';

const linkItem: PastaItemInterface = (El, about) => ({
  PastaEl: <El>click to go</El>,
  children: <p>{about}</p>,
});

const A = styled.a``;

A.displayName = 'A';

const LinkCopyPastaConfig = [linkItem(A, 'Anchor Element')];

export const LinkExamples: FC<any> = () => (
  <CopyPastas title="Link Examples" pastaConfig={LinkCopyPastaConfig} />
);
