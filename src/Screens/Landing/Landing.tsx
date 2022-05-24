import React from 'react';
import { css } from '@emotion/react';

import text from './text.json';
import { H1 } from 'src/Library';

import {
  AnimationIntro,
  ImagesIntro,
  LayoutIntro,
  MicroInteractionsIntro,
  TypographyIntro,
  UIElementsIntro,
  VideoIntro,
} from 'src/Screens';

const LandingShowcase = () => (
  <>
    <TypographyIntro />
    <ImagesIntro />
    <UIElementsIntro />
    <LayoutIntro />
    <VideoIntro />
    <AnimationIntro />
    <MicroInteractionsIntro />
  </>
);

const landingCss = css({});

export const Landing = () => (
  <article className="screen" css={landingCss}>
    <H1>{text.title}</H1>
    <p>{text.subtitle}</p>
    <p>{text.about}</p>
    <LandingShowcase />
  </article>
);
