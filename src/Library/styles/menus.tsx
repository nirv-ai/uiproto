import { css } from '@emotion/react';

// TODO: (noah) .inline & .block > ul smells bad
// ^ should be { rolemenuitem { &.inline} { &.block } }

export const menusCss = css`
  .inline > menu > [role="menuitem"] {
    display: inline-flex;
  }

  .block > menu > [role="menuitem"] {
    display: flex;
  }

  [role="menuitem"] {
    list-style-type: none;

    & > * {
      flex: 1 1 100%;
    }
  }
`;
