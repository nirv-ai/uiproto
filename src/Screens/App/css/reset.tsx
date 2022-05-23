import { css } from '@emotion/react';

export const reset = css`
  html {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: white;
    box-sizing: border-box;
    color: var(--color-scheme1-darkdark);
    font-size: var(--fsize);
    word-break: break-word;
    min-height: 100%;

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

  a, p, span {
    font-family: var(--font-reading1);
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

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  a, button, input[type="submit"], input[type="reset"]  {

    cursor: pointer;
  }
`;
