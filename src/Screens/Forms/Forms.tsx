import text from './text.json';
import { sentences } from 'src/mocks';
import { Section, Screen, P } from 'src/Library';

export const FormsIntro = () => (
  <Section text={text}>
    <P>{sentences}</P>
  </Section>
);

export const Forms = () => {
  const docTitle = 'UIProto: Form Components and controls for React & Typescript';

  return (
    <Screen text={text} docTitle={docTitle}>
      <P>{sentences}</P>
    </Screen>
  );
};
