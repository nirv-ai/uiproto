import React from 'react';

import text from './text.json';
import { sentences } from 'src/mocks';

export const TypographyIntro = () => (
  <section>
    <h2>{text.title}</h2>
    <p>{text.subtitle}</p>
    <p>{sentences}</p>
  </section>
);

export const Typography = () => (
  <article>
    <TypographyIntro />
  </article>
);
