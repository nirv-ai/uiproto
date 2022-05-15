import { css } from '@emotion/react';

import { rootVars, elements, menusAndLinks, mediaQueries, layout } from './css';

export const globalStyles = css`
  ${rootVars};
  ${elements};
  ${layout};
  ${menusAndLinks};
  ${mediaQueries};
`;
