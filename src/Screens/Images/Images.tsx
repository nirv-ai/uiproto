import { ImgExamples, LazyImgExamples, BgImgExamples } from './Examples';
import { Section, Screen, P } from 'src/Library';
import { sentences } from 'src/mocks';
import text from './text.json';

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
      <ImgExamples />
      <BgImgExamples />
      <LazyImgExamples />
    </Screen>
  );
};
