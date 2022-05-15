import { css } from '@emotion/react';

export const elements = css`
  html {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--color-scheme1-lightlight);
    box-sizing: border-box;
    color: var(--color-scheme1-darkdark);
    font-family: Fabriga, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: var(--fsize);

    *,
    *::before,
    *::after {
      color: inherit;
      box-sizing: inherit;
      font-size: inherit;
      padding: 0;
      margin: 0;
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
`;
