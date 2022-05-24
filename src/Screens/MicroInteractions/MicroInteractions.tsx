import text from './text.json';
import { sentences } from 'src/mocks';
import { Section, Screen } from 'src/Library';

export const MicroInteractionsIntro = () => (
  <Section text={text}>
    <p>{sentences}</p>
  </Section>
);

export const MicroInteractions = () => {
  const docTitle = 'UIProto: Micro Interaction Components for React & Typescript';

  return (
    <Screen text={text} docTitle={docTitle}>
      <p>{sentences}</p>
    </Screen>
  );
};
