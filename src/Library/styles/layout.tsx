import { css } from '@emotion/react';

export const layoutCss = css`
  .inline {
    display: inline-block;
  }

  .block {
    display: block;
  }

  .row {
    flex-flow: row wrap;
  }

  .column {
    flex-flow: column wrap;
  }

  .row, .column {
    display: flex;
    justify-content: space-between;

    > * {
      flex: 1 1 100%;
    }
  }
`;
