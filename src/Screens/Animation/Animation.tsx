import text from './text.json';
import { sentences } from 'src/mocks';
import { Screen, Section, P } from 'src/Library';

export const AnimationIntro = () => (
  <Section text={text}>
    <P>{sentences}</P>
  </Section>
);

export const Animation = () => {
  const docTitle = 'UIProto: Animation Components for React & Typescript';

  return (
    <Screen text={text} docTitle={docTitle}>
      <P>{sentences}</P>
    </Screen>
  );
};
