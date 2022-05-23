import React from 'react';
import { css } from '@emotion/react';

import text from './text.json';

const footerCss = css({});

export const AppFooter = () => (
  <footer css={footerCss}>
    <h1>{text.author}</h1>
    <p>for the rule breakers</p>
  </footer>
);
