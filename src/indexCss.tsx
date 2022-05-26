import { css } from '@emotion/react';
import 'animate.css';

import {
  rootVarsCss,
  layoutCss,
  resetCss,
  textCss,
  linksCss,
  mediaQueriesCss,
  imageCss,
} from 'src/Library';

export const indexCss = css`
  ${rootVarsCss};
  ${resetCss};
  ${layoutCss}
  ${textCss}
  ${linksCss}
  ${imageCss}
  ${mediaQueriesCss};
`;
