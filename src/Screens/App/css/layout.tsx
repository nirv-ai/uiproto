import { css } from '@emotion/react';

export const layout = css`
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
  
  #outer-container {
    position: relative;
    display: flex;
    flex-flow: wrap column;
    height: 100%;
  }

  #inner-container {
    position: relative;

    > header, > footer {
      z-index: var(--layer-6);
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
        margin-left: var(--spacing-XS);
      }

      > h1 {
        margin-left: var(--spacing-XS);
        font-size: inherit;
        font-family: var(--font-stylish3);
      }

      > button {
        position: absolute;
        right: var(--spacing-XS);
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
      padding-left: var(--spacing-XXS);

      > h1:first-child {
      }

      > p {
        font-family: var(--font-stylish2);
      }
    }

    #app-wrapper {
      padding: calc(2 * var(--spacing-XS)) var(--spacing-XS);
    }
  }
`;
