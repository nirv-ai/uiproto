import React from 'react';

import text from './text.json';

export const AnimationIntro = () => (
  <section>
    <h2>{text.title}</h2>
    <p>{text.subtitle}</p>
  </section>
);

export const Animation = () => (
  <article>
    <AnimationIntro />
  </article>
);
