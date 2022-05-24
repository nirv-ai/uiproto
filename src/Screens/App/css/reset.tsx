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

  h1, h2, h3, h4, h5, h6,
  .h1, .h2, .h3m .h4, .h5, .h6 {
    font-family: var(--font-heading1);
    text-transform: uppercase;
    letter-spacing: -0.08em;
  }

  h1, .h1 {
    font-size: var(--fsize-XXL);
    font-weight: 400;
  }
  h2, .h2 {
    font-size: var(--fsize-XL);
    font-weight: 400;
  }
  h3, .h3 {
    font-size: var(--fsize-L);
    font-weight: 300;
  }
  h4, .h4 {
    font-size: var(--fsize-S);
    font-weight: 300;
  }
  h5, .h5 {
    font-size: var(--fsize-XS);
    font-weight: 200;
  }
  h6, .h6 {
    font-size: var(--fsize-XXS);
    letter-spacing: 0.02em;
    font-weight: 200;
  }

  a, button, input[type="submit"], input[type="reset"], .cta  {
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6, a, p, span, button, input,
  .h1, .h2, .h3, .h4, .h5, .h6, .cta {
    max-width: 50ch;
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
