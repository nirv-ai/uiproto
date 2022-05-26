import { css } from '@emotion/react';

import { flexCss } from './flexCss';
import { gridCss } from './gridCss';

export const layoutCss = css`
  .inline {
    display: inline-block;
  }

  .block {
    display: block;
  }

  ${flexCss}
  ${gridCss}
`;
