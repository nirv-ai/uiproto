import React, { type FC, type ReactNode, type ElementType } from 'react';

interface HInterface {
  children?: ReactNode;
  HType: ElementType;
  [x: string]: any;
}
const H: FC<HInterface> = ({ children, HType, ...props }) => {
  return <HType {...props}>{children}</HType>;
};

export type HType = Omit<HInterface, 'HType'>;

export const H1: FC<HType> = props => <H {...props} HType="h1" />;
export const H2: FC<HType> = props => <H {...props} HType="h2" />;
export const H3: FC<HType> = props => <H {...props} HType="h3" />;
export const H4: FC<HType> = props => <H {...props} HType="h4" />;
export const H5: FC<HType> = props => <H {...props} HType="h5" />;
export const H6: FC<HType> = props => <H {...props} HType="h6" />;

H1.displayName = 'H1';
H2.displayName = 'H2';
H3.displayName = 'H3';
H4.displayName = 'H4';
H5.displayName = 'H5';
H6.displayName = 'H6';

interface HIntroInterface {
  Title?: FC<HType>;
  SubTitle?: FC<HType>;
  text: {
    title: string;
    subtitle: string;
    [x: string]: any;
  };
}

export const HIntro: FC<HIntroInterface> = ({ Title = H1, SubTitle = H2, text }) => (
  <>
    <Title>{text.title}</Title>
    <SubTitle>{text.subtitle}</SubTitle>
  </>
);

HIntro.displayName = 'HIntro';
