import React from 'react';
import { css } from '@emotion/react';

import text from './text.json';

const footerCss = css({
  textTransform: 'uppercase',
});

export const AppFooter = () => <footer css={footerCss}>{text.author}</footer>;
