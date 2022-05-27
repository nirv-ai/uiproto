import { css } from '@emotion/react';
import 'animate.css';

import {
  formsCss,
  imageCss,
  layoutCss,
  linksCss,
  mediaQueriesCss,
  resetCss,
  rootVarsCss,
  textCss,
} from 'src/Library';

export const indexCss = css`
  ${rootVarsCss}
  ${resetCss}
  ${layoutCss}
  ${textCss}
  ${linksCss}
  ${imageCss}
  ${formsCss}
  ${mediaQueriesCss}
`;
