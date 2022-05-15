import React from 'react';

import landingJson from './landing.json';

export const Landing = () => (
  <article className="screen">
    <section>
      <h1>{landingJson.title}</h1>
      <h2>{landingJson.subtitle}</h2>
    </section>
    <section>
      <p>{landingJson.about}</p>
    </section>
  </article>
);
