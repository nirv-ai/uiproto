import { css } from '@emotion/react';

export const layout = css`
  #inner-container {
    > header, > footer {
      align-items: center;
      background-color: var(--color-scheme1-lightdark);
      color: white;
      display: flex;
      flex-flow: row nowrap;
      height: 1.5em;
      justify-content: flex-start;
      left: 0;
      position: fixed;
      right: 0;
    }

    > header {
      top: 0;

      > img {
        margin-left: 0.5em;
      }

      > h1 {
        margin-left: 0.5em;
        font-size: inherit;
      }

      > button {
        position: absolute;
        right: 0.5em;
      }

      nav {
        background-color: var(--color-scheme1-lightdark);
        color: black;
        /* font-weight: 600; */
      }
    }

    > footer {
      overflow: hidden;
      bottom: 0;
      padding-left: 0.1rem;

      > h1:first-child {
      }

      > p {
        font-family: var(--font-stylish2);
      }
    }

   > main {
      margin-top: 1.5em;
      margin-bottom: 1.5em;
    }

    .row {
      display: flex;
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
      > * {
        flex: 1 1 100%;
      }
    }
  }
`;
