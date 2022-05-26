import { css } from '@emotion/react';

export const textCss = css`
  h1, h2, h3, h4, h5, h6,
  .h1, .h2, .h3 .h4, .h5, .h6 {
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

  button, input[type="submit"], input[type="reset"], .cta  {
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6, p, span, button, input,
  .h1, .h2, .h3, .h4, .h5, .h6, .cta {
    max-width: var(--font-max-width);
  }
`;
