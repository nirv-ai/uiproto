import { css } from '@emotion/react';

export const layout = css`
  #inner-container {
    & > header, & > footer {
      align-items: center;
      color: white;
      background-color: var(--color-scheme1-lightdark);
      height: 1.5em;
      left: 0;
      position: fixed;
      right: 0;
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
