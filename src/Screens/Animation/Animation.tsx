import text from './text.json';
import { sentences } from 'src/mocks';
import { Screen, Section } from 'src/Library';

export const AnimationIntro = () => (
  <Section text={text}>
    <p>{sentences}</p>
  </Section>
);

export const Animation = () => {
  const docTitle = 'UIProto: Animation Components for React & Typescript';

  return (
    <Screen text={text} docTitle={docTitle}>
      <p>{sentences}</p>
    </Screen>
  );
};
