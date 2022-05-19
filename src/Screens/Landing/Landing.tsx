import React from 'react';

import text from './text.json';

import {
  AnimationIntro,
  LayoutIntro,
  MicroInteractionsIntro,
  TypographyIntro,
  UIElementsIntro,
} from 'src/Screens';

const LandingShowcase = () => (
  <>
    <AnimationIntro />
    <LayoutIntro />
    <MicroInteractionsIntro />
    <TypographyIntro />
    <UIElementsIntro />
  </>
);

export const Landing = () => (
  <article className="screen">
    <section>
      <h1>{text.title}</h1>
      <h2>{text.subtitle}</h2>
    </section>
    <section>
      <p>{text.about}</p>
    </section>
    <article>
      <LandingShowcase />
    </article>
  </article>
);
