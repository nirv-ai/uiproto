import { css } from '@emotion/react';

export const reset = css`
  html {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: white;
    box-sizing: border-box;
    color: var(--color-scheme1-darkdark);
    font-family: var(--font-reading1);
    font-size: var(--fsize);
    min-height: 100%;
    word-break: break-word;

    *,
    *::before,
    *::after {
      background: none;
      border: none;
      box-sizing: inherit;
      color: inherit;
      font-size: inherit;
      margin: 0;
      outline: inherit;
      padding: 0;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading1);
    text-transform: uppercase;
  }

  h1 {
    font-size: var(--fsize-1);
  }
  h2 {
    font-size: var(--fsize-2);
  }
  h3 {
    font-size: var(--fsize-3);
  }
  h4 {
    font-size: var(--fsize-4);
  }
  h5 {
    font-size: var(--fsize-5);
  }
  h6 {
    font-size: var(--fsize-6);
  }

  a, p, span {
    font-family: var(--font-reading1);
  }

  a, button, input[type="submit"], input[type="reset"]  {
    cursor: pointer;
  }

  code, pre, .code {
    font-family: var(--font-reading2);
  }

  code.code {
    * {
      font-size: calc(var(--fsize) * 0.6);
    }
  }
`;
