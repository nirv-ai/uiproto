import { type FC } from 'react';

import { Text, type TextInterface } from './Text';

export interface HInterface extends TextInterface {
  ElType: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const H: FC<HInterface> = props => {
  return <Text {...props} />;
};
H.displayName = 'H';

export const H1 = props => <H {...props} ElType="h1" />;
export const H2 = props => <H {...props} ElType="h2" />;
export const H3 = props => <H {...props} ElType="h3" />;
export const H4 = props => <H {...props} ElType="h4" />;
export const H5 = props => <H {...props} ElType="h5" />;
export const H6 = props => <H {...props} ElType="h6" />;

H1.displayName = 'H1';
H2.displayName = 'H2';
H3.displayName = 'H3';
H4.displayName = 'H4';
H5.displayName = 'H5';
H6.displayName = 'H6';

export interface HIntroInterface {
  Title?;
  SubTitle?;
  text: {
    title: string;
    subtitle?: string;
    [x: string]: any;
  };
}

export const HIntro: FC<HIntroInterface> = ({ Title = H1, SubTitle = H2, text }) => (
  <>
    <Title>{text.title}</Title>
    {text.subtitle ? <SubTitle>{text.subtitle}</SubTitle> : null}
  </>
);

HIntro.displayName = 'HIntro';
