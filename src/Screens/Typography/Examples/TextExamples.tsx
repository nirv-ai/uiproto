import React, { type FC } from 'react';
import styled from '@emotion/styled';

import { CopyPastas, type PastaItemInterface } from 'src/Library';

const textItem: PastaItemInterface = (El, about) => ({
  PastaEl: <El>The world is full of objects, more or less interesting.</El>,
  children: <p>{about}</p>,
});

const Span = styled.span``;
const P = styled.p``;

Span.displayName = 'Span';
P.displayName = 'P';

const TextCopyPastaConfig = [textItem(Span, 'Span Element'), textItem(P, 'P Element')];

export const TextExamples: FC<any> = () => (
  <CopyPastas title="Text Examples" pastaConfig={TextCopyPastaConfig} />
);
