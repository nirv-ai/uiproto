import { type FC } from 'react';

import { CopyPastas, P, B, Em, Strong, Mark, Span, type PastaItemInterface } from 'src/Library';

const textItem: PastaItemInterface = (El, about, props = {}) => ({
  PastaEl: <El {...props}>The world is full of objects, more or less interesting.</El>,
  children: <p>{about}</p>,
});

const PCopyPastaConfig = [
  textItem(B, 'B Element'),
  textItem(Em, 'Em Element'),
  textItem(Mark, 'Mark Element'),
  textItem(P, 'Paragraph Element (inline)', { inline: true }),
  textItem(P, 'Paragraph Element'),
  textItem(Strong, 'Strong Element'),
  textItem(Span, 'Span Element', { ariaRole: 'aria role is required for spans' }),
];

export const TextExamples: FC<any> = () => (
  <CopyPastas title="Text Examples" pastaConfig={PCopyPastaConfig} />
);
