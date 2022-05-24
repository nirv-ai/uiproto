import text from './text.json';
import { sentences } from 'src/mocks';
import { Screen, Section, P } from 'src/Library';

export const VideoIntro = () => (
  <Section text={text}>
    <P>{sentences}</P>
  </Section>
);

export const Video = () => {
  const docTitle = 'UIProto: Video Components for React & Typescript';

  return (
    <Screen text={text} docTitle={docTitle}>
      <P>{sentences}</P>
    </Screen>
  );
};
