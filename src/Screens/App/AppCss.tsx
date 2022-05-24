import { css } from '@emotion/react';

export const AppCss = css`
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

      > .appname {
        margin-left: var(--spacing-XS);
        font-family: var(--font-stylish3);
        font-size: inherit;
      }

      > button {
        position: absolute;
        right: var(--spacing-XS);
      }

      nav {
        background-color: var(--color-scheme1-lightdark);
        color: black;
        font-family: var(--font-heading1);
      }
    }

    > footer {
      overflow: hidden;
      bottom: 0;
      padding-left: var(--spacing-XXS);
      color: white;

      > strong {
        color: inherit;
      }
      > small {
        font-family: var(--font-stylish2);
      }
    }
  }

  #app-wrapper {
      padding: calc(2 * var(--spacing-XS)) var(--spacing-XS);
    }
`;
