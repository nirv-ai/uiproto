import { css } from '@emotion/react';

export const layout = css`
  #inner-container {
    & > header, & > footer {
      position: fixed;
      left: 0;
      right: 0;
      height: 1.5em;
    }

    & > header {
      top: 0;
    }

    & > footer {
      bottom: 0;
    }

    & > main {
      margin-top: 1.5em;
      margin-bottom: 1.5em;
    }
  }

  .row {
    display: fex;
    flex-flow: row wrap;
    justify-content: space-between;
  }

  .column {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
  }

  .row, .column {
    /* all immediate children */
    & > * {
      flex: 1 1 100%;
    }
  }
`;
