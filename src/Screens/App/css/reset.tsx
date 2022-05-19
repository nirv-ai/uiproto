import { css } from '@emotion/react';

export const reset = css`
  html {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: white;
    box-sizing: border-box;
    color: var(--color-scheme1-darkdark);
    font-family: Fabriga, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: var(--fsize);
    word-break: break-word;
    min-height: 100%;

    *,
    *::before,
    *::after {
      box-sizing: inherit;
      color: inherit;
      font-size: inherit;
      margin: 0;
      padding: 0;
    }
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
    border: none;
    cursor: pointer;
    outline: inherit;
  }
`;
