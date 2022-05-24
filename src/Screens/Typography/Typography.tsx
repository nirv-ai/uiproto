import React, { type FC } from 'react';

import text from './text.json';
import { sentences } from 'src/mocks';
import { HExamples } from './HExamples';
import { H2, H3 } from 'src/Library';

export const TypographyIntro: FC<any> = () => (
  <section>
    <H2>{text.title}</H2>
    <H3>{text.subtitle}</H3>
    <p>{sentences}</p>
  </section>
);

export const Typography = () => (
  <article>
    <TypographyIntro />
    <HExamples />
  </article>
);
