import { css } from '@emotion/react';

export const layout = css`
  .row {Modal
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
