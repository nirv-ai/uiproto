import React from 'react';
import { css } from '@emotion/react';

import text from './text.json';
import { H1 } from 'src/Library';

const footerCss = css({});

export const AppFooter = () => (
  <footer css={footerCss}>
    <H1>{text.author}</H1>
    <p>for the rule breakers</p>
  </footer>
);
