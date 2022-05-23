import React, { type FC, type ReactNode, type ElementType } from 'react';

interface HInterface {
  children: ReactNode;
  HType: ElementType;
  // [x: string]: any;
}
const H: FC<HInterface> = ({ children, HType, ...props }) => {
  return <HType {...props}>{children}</HType>;
};

export const H1 = props => <H {...props} HType="h1" />;
export const H2 = props => <H {...props} HType="h2" />;
export const H3 = props => <H {...props} HType="h3" />;
export const H4 = props => <H {...props} HType="h4" />;
export const H5 = props => <H {...props} HType="h5" />;
export const H6 = props => <H {...props} HType="h6" />;

H1.displayName = 'H1';
H2.displayName = 'H2';
H3.displayName = 'H3';
H4.displayName = 'H4';
H5.displayName = 'H5';
H6.displayName = 'H6';
