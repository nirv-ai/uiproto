import React from 'react';
import { css } from '@emotion/react';

import text from './text.json';
import { H2, H3 } from 'src/Library';

import {
  AnimationIntro,
  ImagesIntro,
  LayoutIntro,
  MicroInteractionsIntro,
  TypographyIntro,
  UIElementsIntro,
} from 'src/Screens';

const LandingShowcase = () => (
  <section>
    <TypographyIntro />
    <ImagesIntro />
    <UIElementsIntro />
    <AnimationIntro />
    <LayoutIntro />
    <MicroInteractionsIntro />
  </section>
);

const landingCss = css({});

export const Landing = () => (
  <article className="screen" css={landingCss}>
    <section>
      <H2>{text.title}</H2>
      <H3>{text.subtitle}</H3>
      <p>{text.about}</p>
    </section>
    <LandingShowcase />
  </article>
);
