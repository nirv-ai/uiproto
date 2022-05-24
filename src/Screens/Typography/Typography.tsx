import React, { type FC } from 'react';

import text from './text.json';
import { HIntro, H2, H3 } from 'src/Library';
import { sentences } from 'src/mocks';
import { HExamples, CtaExamples, TextExamples, LinkExamples } from './Examples';

export const TypographyIntro: FC<any> = () => (
  <section>
    <HIntro Title={H2} SubTitle={H3} text={text} />
    <p>{sentences}</p>
  </section>
);

export const Typography = () => (
  <article>
    <HIntro text={text} />
    <p>{sentences}</p>
    <TextExamples />
    <LinkExamples />
    <CtaExamples />
    <HExamples />
  </article>
);
