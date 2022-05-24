import text from './text.json';
import { sentences } from 'src/mocks';
import { Screen, Section } from 'src/Library';

export const VideoIntro = () => (
  <Section text={text}>
    <p>{sentences}</p>
  </Section>
);

export const Video = () => {
  const docTitle = 'UIProto: Video Components for React & Typescript';

  return (
    <Screen text={text} docTitle={docTitle}>
      <p>{sentences}</p>
    </Screen>
  );
};
