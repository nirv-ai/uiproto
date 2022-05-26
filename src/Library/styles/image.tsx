import { css } from '@emotion/react';

export const imageCss = css`
  img {
    /* dont resize images by default */
    /* should require a flex-basis: imageWidth */
    flex: 0 0 auto;
  }
`;
