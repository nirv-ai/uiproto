import { css } from '@emotion/react';
import 'animate.css';

import {
  rootVarsCss,
  layoutCss,
  resetCss,
  textCss,
  linksCss,
  menusCss,
  mediaQueriesCss,
} from 'src/Library';

export const indexCss = css`
  ${rootVarsCss};
  ${resetCss};
  ${textCss}
  ${linksCss}
  ${menusCss};
  ${layoutCss}
  ${mediaQueriesCss};
`;
