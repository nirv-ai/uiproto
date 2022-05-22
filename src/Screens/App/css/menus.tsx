import { css } from '@emotion/react';

export const menus = css`
  .inline > ul > [role="menuitem"] {
    display: inline-flex;
  }

  .block > ul > [role="menuitem"] {
    display: flex;
  }

  [role="menuitem"] {
    list-style-type: none;

    & > * {
      flex: 1 1 100%;
    }
  }
`;
