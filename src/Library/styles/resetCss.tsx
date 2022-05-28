import { css } from '@emotion/react';

export const resetCss = css`
  html {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: white;
    box-sizing: border-box;
    color: var(--color-scheme1-darkdark);
    color-scheme: light dark;
    font-family: var(--font-reading1);
    font-size: var(--fsize);
    letter-spacing: 0.02rem;
    line-height: var(--line-height);
    min-height: 100%;
    outline: none;
    word-break: break-word;

    *,
    *::before,
    *::after {
      appearance: none;
      background-color: inherit;
      border: none;
      box-sizing: inherit;
      color: inherit;
      font-family: inherit;
      font-size: inherit;
      list-style: none;
      margin: 0;
      outline: inherit;
      padding: 0;
      text-decoration: none;
    }
  }

  code, pre, .code {
    font-family: var(--font-reading2);

    * {
      max-width: 80vw;
    }
  }

  code.code {
    * {
      font-size: var(--scale-XXS);
    }
  }
`;
