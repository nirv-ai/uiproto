import { text } from './text';
import { sentences } from 'src/mocks';
import { Screen, Section, P } from 'src/Library';

export const UIElementsIntro = () => (
  <Section text={text}>
    <P>{sentences}</P>
  </Section>
);

export const UIElements = () => {
  const docTitle = 'UIProto: UI Elements for React & Typescript';

  return (
    <Screen text={text} docTitle={docTitle}>
      <P>{sentences}</P>
    </Screen>
  );
};
