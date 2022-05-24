import React from 'react';

import text from './text.json';
import { sentences } from 'src/mocks';
import { H2, H3 } from 'src/Library';

export const MicroInteractionsIntro = () => (
  <section>
    <H2>{text.title}</H2>
    <H3>{text.subtitle}</H3>
    <p>{sentences}</p>
  </section>
);

export const MicroInteractions = () => (
  <article>
    <MicroInteractionsIntro />
  </article>
);
