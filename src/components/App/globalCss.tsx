import { css } from '@emotion/react';
import { between } from 'polished';

const minScreenWidth = '320px';
const maxScreenWidth = '1920px';

export const globalStyles = css`
  :root {
    /* everything relative to these sizes!*/
    --fontsize-normal: ${between('32px', '96px', minScreenWidth, maxScreenWidth)};
    --spacing-normal: 1.15rem;
    --lineheight-normal: 1.5rem;
    --lineheight-big: 2rem;

    --fontsize-big: calc(1.5 * var(--fontsize-normal));
    --fontsize-bigger: calc(1.8 * var(--fontsize-normal));
    --fontsize-biggest: calc(2.1 * var(--fontsize-normal));
    --fontsize-small: calc(.7 * var(--fontsize-normal));
    --fontsize-smaller: calc(.5 * var(--fontsize-normal));
    --fontsize-smallest: calc(.3 * var(--fontsize-normal));

    --button-big: 2rem;
    --button-small: 0.5rem;
    --button-normal: 1rem;

    --spacing-big: calc(2 * var(--spacing-normal));
    --spacing-bigger: calc(2.5 * var(--spacing-normal));
    --spacing-biggest: calc(3 * var(--spacing-normal));
    --spacing-huge: calc(3.5 * var(--spacing-normal));
    --spacing-small: calc(0.8 * var(--spacing-normal));
    --spacing-smaller: calc(0.6 * var(--spacing-normal));
    --spacing-tiniest: calc(0.2 * var(--spacing-normal));
    --spacing-tiny: calc(0.4 * var(--spacing-normal));
    --spacing-records: 75vh;

    /* zindex layers */
    --layer-1: 1;
    --layer-2: 200;
    --layer-3: 3000;
    --layer-4: 40000;
    --layer-5: 500000;
    --layer-6: 6000000;

    --color-bg-default: black;
    --color-default: antiquewhite;
    --color-black: black;
    --color-blue: #3273dc;
    --color-gold-normal: darkgoldenrod;
    --color-gold-yellow: #ffdd57;
    --color-gold-white: #dbdbdb;
    --color-green-vibrant: GreenYellow;
    --color-green: #48c774;
    --color-green-lime: lime;
    --color-grey-dark2: #363636;
    --color-grey-dark3: darkslategray;
    --color-grey-dark: #373a47;
    --color-grey-blue: slategrey;
    --color-grey-light: lightslategrey;
    --color-hover: #a90000;
    --color-pink-vibrant: DeepPink;
    --color-purple-vibrant: #5755d9;
    --color-red-dark:  #a90000;
    --color-red-pink: #f14668;
    --color-teal: #00d1b2;
    --color-white-dark: #bdc3c7;
    --color-white1: antiquewhite;
    --color-white2: MintCream;
    --color-white-peach: peachpuff;
  }

  @media (max-width: 700px) {
    :root {
      --flexflow-column: row nowrap;
      --flexflow-row: column nowrap;
      --justity-content-column: space-between;
    }
  }

  @media (min-width: 701px) {
    :root {
      /** overrides */
    }
  }

  @media (min-width: 1300px) {
    :root {
      /** overrides */
    }
  }

  html {
    * {
      color: inherit;
      background-color: var(--color-bg-default);
    }

    body {
      margin: 0;
      font-family: Fabriga, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
      color: var(--color-default);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-size: var(--fontsize-normal);

      h1 {
        font-size: var(--fontsize-big);
      }

      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
      }
    }
  }
`;
