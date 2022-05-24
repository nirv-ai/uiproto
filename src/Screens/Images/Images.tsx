import text from './text.json';
import { sentences } from 'src/mocks';
import { Section, Screen } from 'src/Library';

export const ImagesIntro = () => (
  <Section text={text}>
    <p>{sentences}</p>
  </Section>
);

export const Images = () => {
  const docTitle = 'UIProto: Image Components for React & Typescript';

  return (
    <Screen text={text} docTitle={docTitle}>
      <p>{sentences}</p>
    </Screen>
  );
};
