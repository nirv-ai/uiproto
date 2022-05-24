import React, { type FC } from 'react';

import text from './text.json';
import { sentences } from 'src/mocks';
import { HExamples } from './HExamples';

export const TypographyIntro: FC<any> = () => (
  <section>
    <h2>{text.title}</h2>
    <h3>{text.subtitle}</h3>
    <p>{sentences}</p>
  </section>
);

export const Typography = () => (
  <article>
    <TypographyIntro />
    <HExamples />
  </article>
);
