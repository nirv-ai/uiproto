import { css } from '@emotion/react';

export const rootVarsCss = css`
  @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,400;6..96,600&family=Inconsolata:wght@200;400&family=Indie+Flower&family=Rubik:wght@300;400&family=Belgrano&family=Kelly+Slab&display=swap');

  :root {
    --font-web-safe-reading: Consolas, monaco, monospace;
    --font-web-safe-heading: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Frutiger, Dejavu Sans, sans-serif;
    /* fonts */
    --font-max-width: 50ch;
    --font-heading1: 'Rubik', cursive;
    --font-reading1: 'Belgrano', serif;
    --font-reading2: 'Inconsolata', monospace;
    --font-stylish1: 'Bodoni Moda', serif;
    --font-stylish2: 'Indie Flower', serif;
    --font-stylish3: 'Kelly Slab', cursive;

    /* zindex layers */
    --layer-1: 1;
    --layer-2: 10;
    --layer-3: 100;
    --layer-4: 1000;
    --layer-5: 10000;
    --layer-6: 100000;

    /* base vars */
    --fsize: 32px;
    --line-height: 1.5;
    --spacing: calc(var(--fsize) * var(--line-height));

    /* base scales */
    --scale1: 1.618;
    --scale2: calc(var(--scale1) * 0.7);
    --use-scale: var(--scale1);


    --scale-L: calc(var(--use-scale) * var(--fsize));
    --scale-XL: calc(var(--scale-L) * 1.25);
    --scale-XXL: calc(var(--scale-L) * 1.5);
    --scale-S: calc(var(--scale-L) * 0.75);
    --scale-XS: calc(var(--scale-L) * 0.50);
    --scale-XXS: calc(var(--scale-L) * 0.35);

    /* font sizes */
    --fsize-XXL: var(--scale-XXL);
    --fsize-XL: var(--scale-XL);
    --fsize-L: var(--scale-L);
    --fsize-S: var(--scale-S);
    --fsize-XS: var(--scale-XS);
    --fsize-XXS: var(--scale-XXS);

    /* spacing */
    --spacing-XXL: calc(var(--spacing) * 2);
    --spacing-XL: calc(var(--spacing) * 1.5);
    --spacing-L: calc(var(--spacing) * 1.2);
    --spacing-S: calc(var(--spacing) * 0.8);
    --spacing-XS: calc(var(--spacing) * 0.5);
    --spacing-XXS: calc(var(--spacing) * 0.3);

    /* colors */
    /* these pallets are hella wack */
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
