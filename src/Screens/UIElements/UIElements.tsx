import text from './text.json';
import { sentences } from 'src/mocks';
import { Screen, Section } from 'src/Library';

export const UIElementsIntro = () => (
  <Section text={text}>
    <p>{sentences}</p>
  </Section>
);

export const UIElements = () => {
  const docTitle = 'UIProto: UI Elements for React & Typescript';

  return (
    <Screen text={text} docTitle={docTitle}>
      <p>{sentences}</p>
    </Screen>
  );
};
