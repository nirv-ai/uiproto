import React from 'react';

import text from './text.json';

export const LayoutIntro = () => (
  <section>
    <h2>{text.title}</h2>
    <p>{text.subtitle}</p>
  </section>
);

export const Layout = () => (
  <article>
    <LayoutIntro />
  </article>
);
