import { css } from '@emotion/react';

import { flexCss } from './flex';

export const layoutCss = css`
  .inline {
    display: inline-block;
  }

  .block {
    display: block;
  }

  ${flexCss};
`;
