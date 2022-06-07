import { text } from './text';
import { sentences } from 'src/mocks';
import { Section, Screen, P } from 'src/Library';

export const MicroInteractionsIntro = () => (
  <Section text={text}>
    <P>{sentences}</P>
  </Section>
);

export const MicroInteractions = () => {
  const docTitle = 'UIProto: Micro Interaction Components for React & Typescript';

  return (
    <Screen text={text} docTitle={docTitle}>
      <P>{sentences}</P>
    </Screen>
  );
};
