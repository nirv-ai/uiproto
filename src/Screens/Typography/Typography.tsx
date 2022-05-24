import { type FC } from 'react';

import text from './text.json';
import { Screen, Section } from 'src/Library';
import { sentences } from 'src/mocks';
import { HExamples, CtaExamples, TextExamples, LinkExamples } from './Examples';

export const TypographyIntro: FC<any> = () => (
  <Section text={text}>
    <p>{sentences}</p>
  </Section>
);

export const Typography = () => {
  const docTitle = 'UIProto: Typography Components for React & Typescript';

  return (
    <Screen text={text} docTitle={docTitle}>
      <p>{sentences}</p>
      <TextExamples />
      <LinkExamples />
      <CtaExamples />
      <HExamples />
    </Screen>
  );
};
