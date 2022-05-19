import React from 'react';

import text from './text.json';

import {
  AnimationIntro,
  ImagesIntro,
  LayoutIntro,
  MicroInteractionsIntro,
  TypographyIntro,
  UIElementsIntro,
} from 'src/Screens';

const LandingShowcase = () => (
  <article>
    <AnimationIntro />
    <ImagesIntro />,
    <LayoutIntro />
    <MicroInteractionsIntro />
    <TypographyIntro />
    <UIElementsIntro />
  </article>
);

export const Landing = () => (
  <article className="screen">
    <section>
      <h1>{text.title}</h1>
      <h2>{text.subtitle}</h2>
      <p>{text.about}</p>
    </section>
    <LandingShowcase />
  </article>
);
