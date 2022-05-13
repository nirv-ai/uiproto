/**
 * used the breakpoints recommended at the link below
 * @see https://www.freecodecamp.org/news/css-media-queries-breakpoints-media-types-standard-resolutions-and-more/
 * mobile first responsive layout (hence we use min-width instead of max-width media queries)
 */

import { css } from '@emotion/react';
// example via polished (todo)
// import { between } from 'polished';
// const minScreenWidth = '320px';
// const maxScreenWidth = '1920px';
// --fontsize: ${between('32px', '96px', minScreenWidth, maxScreenWidth)};

const fsize = '32';
// @see https://matemarschalko.medium.com/the-golden-ratio-in-sass-and-css-development-f958e18aa640
const ratio = 1.618033988749894;
// large, gets progressivelly larger
const L1 = ratio;
const L2 = ratio * 2;
const L3 = ratio * 3;
// small: gets progressively smaller
const S1 = ratio / 2;
const S2 = ratio / 3;
const S3 = ratio / 4;

export const globalStyles = css`
  :root {
    /* everything relative to these sizes!*/
    --fontsize: calc(${fsize}px);
    --spacing: calc(1rem / ${ratio}px);


    --fontsize-L1: calc(${L1} * var(--fontsize));
    --fontsize-L2: calc(${L2} * var(--fontsize));
    --fontsize-L3: calc(${L3} * var(--fontsize));
    --fontsize-S1: calc(${S1} * var(--fontsize));
    --fontsize-S2: calc(${S2} * var(--fontsize));
    --fontsize-S3: calc(${S3} * var(--fontsize));

    --spacing-L1: calc(${L1} * var(--spacing));
    --spacing-L2: calc(${L2} * var(--spacing));
    --spacing-L3: calc(${L3} * var(--spacing));
    --spacing-S1: calc(${S1} * var(--spacing));
    --spacing-S2: calc(${S2} * var(--spacing));
    --spacing-S3: calc(${S3} * var(--spacing));


    /* zindex layers */
    --layer-1: 1;
    --layer-2: 10;
    --layer-3: 20;
    --layer-4: 30;
    --layer-5: 40;
    --layer-6: 50;

    /* colors */
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

  /* reset */
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
      font-size: var(--fontsize);

      h1 {
        font-size: var(--fontsize-L3);
      }
      h2 {
        font-size: var(--fontsize-L2);
      }
      h3 {
        font-size: var(--fontsize-L1);
      }
      h4 {
        font-size: var(--fontsize-S1);
      }
      h5 {
        font-size: var(--fontsize-S2);
      }
      h6 {
        font-size: var(--fontsize-S3);
      }

      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
      }

      /*@see https://medium.com/@dave_lunny/stylish-a-styling-e80c80cbc30e */
      [role="link"], a {
        text-decoration: none;
        cursor: pointer;

        &:is(a) {
          &:hover {
            color: var(--color-pink-vibrant);
          }
        }

        /** navlinks */
        &:is(span) {
          color: var(--color-blue);
          display: inline-block;
          position: relative;
          text-transform: uppercase;

          &:before {
            background-color: var(--color-pink-vibrant);
            bottom: -1px; /* again this can be adjusted based on line-height/font-size */
            content: '';
            height: 2px;  /* this can be modified based on the boldness of the font */
            position: absolute;
            width: 0;
            transition: width 0.3s ease-in-out;
          }

          &:hover {
            &:before {
              width: 100%;
            }
          }
        }
      }
    }
  }

  /* mobile first, see media queries for overrides */
  .screen {
    display: flex;
    flex-flow: column nowrap;

    /* all immediate children */
    & > *{
      flex: 1 1 100%;
    }
  }

  /* tablets, S1 screens, laptops */
  @media all and (min-width: 481px){
    :root {
      // --fontsize: calc(${fsize} * 4);
    }

    .screen {
      display: flex;
      flex-flow: column nowrap;

      &.row {
        flex-flow: row nowrap;
      }

      /* all immediate children */
      & > * {
        flex: 1 1 50%;

        &.full {
          flex: 1 1 100%;
        }
      }
    }
  }

  /* large screens, desktops */
  @media all and (min-width: 1025px) {
    :root {
      // --fontsize: calc(${fsize} * 6);
    }
  }

  @media all and (max-height: 500px) {
    .icon {
      float: left;
    }
  }


  /* wide screen: considers both width & height */
  @media all and (min-aspect-ratio: 16/9) {
    /** todo */
  }
`;
