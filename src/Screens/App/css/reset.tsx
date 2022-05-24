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
    line-height: var(--line-height);
    letter-spacing: 0.02rem;

    *,
    *::before,
    *::after {
      background: inherit;
      border: none;
      box-sizing: inherit;
      color: inherit;
      font-size: inherit;
      margin: 0;
      outline: inherit;
      padding: 0;
    }
  }

  code, pre, .code {
    font-family: var(--font-reading2);

    * {
      max-width: unset;
    }
  }

  code.code {
    * {
      font-size: var(--scale-XXS);
    }
  }
`;
