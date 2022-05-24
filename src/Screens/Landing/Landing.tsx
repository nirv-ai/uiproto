import text from './text.json';
import { Screen, P } from 'src/Library';

import {
  AnimationIntro,
  ImagesIntro,
  LayoutIntro,
  MicroInteractionsIntro,
  TypographyIntro,
  UIElementsIntro,
  VideoIntro,
} from 'src/Screens';

const LandingShowcase = () => (
  <>
    <TypographyIntro />
    <ImagesIntro />
    <UIElementsIntro />
    <LayoutIntro />
    <VideoIntro />
    <AnimationIntro />
    <MicroInteractionsIntro />
  </>
);

export const Landing = () => {
  const docTitle = 'UIProto: React & Typescript starterkit for single page applications';

  return (
    <Screen docTitle={docTitle} text={{ title: text.title }}>
      <P>{text.subtitle}</P>
      <P>{text.about}</P>
      <LandingShowcase />
    </Screen>
  );
};
