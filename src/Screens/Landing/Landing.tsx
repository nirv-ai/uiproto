import React from 'react';
import { css } from '@emotion/react';

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
    <TypographyIntro />
    <ImagesIntro />
    <UIElementsIntro />
    <AnimationIntro />
    <LayoutIntro />
    <MicroInteractionsIntro />
  </article>
);

const landingCss = css({});

export const Landing = () => (
  <article className="screen" css={landingCss}>
    <section>
      <h1>{text.title}</h1>
      <h2>{text.subtitle}</h2>
      <p>{text.about}</p>
    </section>
    <LandingShowcase />
  </article>
);
