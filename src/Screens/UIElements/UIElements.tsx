import React from 'react';

import text from './text.json';
import { sentences } from 'src/mocks';
import { HIntro, H2, H3 } from 'src/Library';

export const UIElementsIntro = () => (
  <section>
    <HIntro Title={H2} SubTitle={H3} text={text} />
    <p>{sentences}</p>
  </section>
);

export const UIElements = () => (
  <article>
    <HIntro text={text} />
    <p>{sentences}</p>
  </article>
);
