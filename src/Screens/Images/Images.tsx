import text from './text.json';
import { sentences } from 'src/mocks';
import { Section, Screen, P } from 'src/Library';

export const ImagesIntro = () => (
  <Section text={text}>
    <P>{sentences}</P>
  </Section>
);

export const Images = () => {
  const docTitle = 'UIProto: Image Components for React & Typescript';

  return (
    <Screen text={text} docTitle={docTitle}>
      <P>{sentences}</P>
    </Screen>
  );
};
