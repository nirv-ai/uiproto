import React from 'react';

import appJson from './App.json';

export const AppLanding = () => (
  <article className="screen">
    <section>
      <h1>{appJson.title}</h1>
      <h2>{appJson.subtitle}</h2>
    </section>
  </article>
);
