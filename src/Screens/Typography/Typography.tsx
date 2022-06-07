import { type FC } from 'react';

import { HExamples, TextExamples, LinkExamples } from './Examples';
import { Screen, Section, P } from 'src/Library';
import { sentences } from 'src/mocks';
import { text } from './text';

export const TypographyIntro: FC<any> = () => (
  <Section text={text}>
    <P>{sentences}</P>
  </Section>
);

export const Typography = () => {
  const docTitle = 'UIProto: Typography Components for React & Typescript';

  return (
    <Screen text={text} docTitle={docTitle}>
      <P>{sentences}</P>
      <TextExamples />
      <LinkExamples />
      <HExamples />
    </Screen>
  );
};
