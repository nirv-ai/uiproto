import { type FC } from 'react';

import {
  B,
  CopyPastas,
  Em,
  Mark,
  P,
  Small,
  Span,
  Strong,
  type PastaItemInterface,
} from 'src/Library';

const textItem: PastaItemInterface = (El, about, props = {}) => ({
  PastaEl: <El {...props}>The world is full of objects, more or less interesting.</El>,
  children: <P>{about}</P>,
});

const PCopyPastaConfig = [
  textItem(B, 'B Element'),
  textItem(Em, 'Em Element'),
  textItem(Mark, 'Mark Element'),
  textItem(P, 'Paragraph Element (inline)', { inline: true }),
  textItem(P, 'Paragraph Element'),
  textItem(Small, 'Small Element'),
  textItem(Span, 'Span Element', { ariaRole: 'aria role is required for spans' }),
  textItem(Strong, 'Strong Element'),
];

export const TextExamples: FC<any> = () => (
  <CopyPastas title="Text Examples" pastaConfig={PCopyPastaConfig} />
);
