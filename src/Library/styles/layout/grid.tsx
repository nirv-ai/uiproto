import { css } from '@emotion/react';

export const gridCss = css`
  .grid {
    display: grid;

    &.equal-cols {
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: 1fr;
    }
  }

`;
