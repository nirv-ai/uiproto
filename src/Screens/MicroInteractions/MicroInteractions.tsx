import React from 'react';

import text from './text.json';
import { sentences } from 'src/mocks';

export const MicroInteractionsIntro = () => (
  <section>
    <h2>{text.title}</h2>
    <p>{text.subtitle}</p>
    <p>{sentences}</p>
  </section>
);

export const MicroInteractions = () => (
  <article>
    <MicroInteractionsIntro />
  </article>
);
