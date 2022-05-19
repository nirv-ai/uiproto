import React from 'react';

import text from './text.json';

export const UIElementsIntro = () => (
  <section>
    <h2>{text.title}</h2>
    <p>{text.subtitle}</p>
  </section>
);

export const UIElements = () => (
  <article>
    <UIElementsIntro />
  </article>
);
