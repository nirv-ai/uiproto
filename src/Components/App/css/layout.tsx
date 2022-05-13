import { css } from '@emotion/react';

export const layout = css`
  .row {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    /* all immediate children */
    & > * {
      flex: 1 1 100%;
    }
  }

  .column {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;

    /* all immediate children */
    & > * {
      flex: 1 1 100%;
    }
  }
`;
