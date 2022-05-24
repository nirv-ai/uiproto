import { type FC } from 'react';
import styled from '@emotion/styled';

import { CopyPastas, type PastaItemInterface } from 'src/Library';

const ctaItem: PastaItemInterface = (El, about) => ({
  PastaEl: <El>lol need to style the buttons</El>,
  children: <p>{about}</p>,
});

const Button = styled.button``;

Button.displayName = 'Button';

const CtaCopyPastaConfig = [ctaItem(Button, 'Button Element')];

export const CtaExamples: FC<any> = () => (
  <CopyPastas title="CTA Examples" pastaConfig={CtaCopyPastaConfig} />
);
