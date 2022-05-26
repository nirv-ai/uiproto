import { css } from '@emotion/react';

export const flexCss = css`
  .flex {
    display: flex;
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

    // equal sized flex items
    &.equal {
      > * {
        flex: 1 1 0%;
      }
    }
  }
`;
