import { css } from '@emotion/react';

import { rootVars, reset, menus, links, mediaQueries, layout } from './css';

export const globalStyles = css`
  ${rootVars};
  ${reset};
  ${layout};
  ${links}
  ${menus};
  ${mediaQueries};
`;
