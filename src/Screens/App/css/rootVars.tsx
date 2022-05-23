import { css } from '@emotion/react';

export const rootVars = css`
  @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,400;6..96,600&family=Inconsolata:wght@200;400&family=Indie+Flower&family=Rubik:wght@300;400&family=Belgrano&display=swap');

  :root {
    /* fonts */
    --font-heading1: 'Rubik', cursive;
    --font-reading1: 'Belgrano', serif;
    --font-reading2: 'Inconsolata', monospace;
    --font-stylish1: 'Bodoni Moda', serif;
    --font-stylish2: 'Indie Flower', serif;

    /* zindex layers */
    --layer-1: 1;
    --layer-2: 10;
    --layer-3: 100;
    --layer-4: 1000;
    --layer-5: 10000;
    --layer-6: 100000;

    --fsize: 32px;
    --scale1: 1.618;
    --scale2: 0.618;

    --spacing: calc(1% * var(--fsize));

    --scale1-L: calc(var(--scale1) * var(--fsize));
    --scale1-XL: calc(var(--scale1-L) * 1.25);
    --scale1-XXL: calc(var(--scale1-L) * 1.5);
    --scale1-S: calc(var(--scale1-L) * 0.75);
    --scale1-XS: calc(var(--scale1-L) * 0.50);
    --scale1-XXS: calc(var(--scale1-L) * 0.35);

    --fsize-1: var(--scale1-XXL);
    --fsize-2: var(--scale1-XL);
    --fsize-3: var(--scale1-L);
    --fsize-4: var(--scale1-S);
    --fsize-5: var(--scale1-XS);
    --fsize-6: var(--scale1-XXS);

    /* colors */
    /* scheme1: https://colorhunt.co/palette/f0e3caff8303a357091b1a17 */
    --color-scheme1-darkdark: #1B1A17;
    --color-scheme1-darklight: #A35709;
    --color-scheme1-lightdark: #FF8303;
    --color-scheme1-lightlight: #F0E3CA;
    /* scheme1 blue: https://colorhunt.co/palette/c4ddff7fb5ff001d6efee2c5 */
    --color-scheme1-bluedark: #001D6E;
    --color-scheme1-bluemid: #7FB5FF;
    --color-scheme1-bluelight: #C4DDFF;

    /* todo: these colors are dope in isolation, but wack holistically */
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
`;
