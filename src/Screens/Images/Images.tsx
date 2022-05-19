import React from 'react';

import text from './text.json';

export const ImagesIntro = () => (
  <section>
    <h2>{text.title}</h2>
    <p>{text.subtitle}</p>
  </section>
);

export const Images = () => (
  <article>
    <ImagesIntro />
  </article>
);
