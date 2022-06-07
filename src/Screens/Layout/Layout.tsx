import { text } from './text';
import { sentences } from 'src/mocks';
import { Section, Screen } from 'src/Library';

export const LayoutIntro = () => (
  <Section text={text}>
    <p>{sentences}</p>
  </Section>
);

export const Layout = () => {
  const docTitle = 'UIProto: Layout Components for React & Typescript';

  return (
    <Screen text={text} docTitle={docTitle}>
      <p>{sentences}</p>
    </Screen>
  );
};
