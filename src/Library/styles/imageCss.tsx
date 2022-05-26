import { css } from '@emotion/react';

export const imageCss = css`
  img {
    image-rendering: -webkit-optimize-contrast;
    object-fit: cover;

    &.width-only {
      height: auto; /* overries any html height */
      max-width: 100%;
    }
    &.height-only {
      max-height: 100%;
      width: auto; /* overries any html width */
    }

    &.width-only, &.height-only {
      object-fit: unset;
    }
  }

  .img-wrapper {
    position: relative;

    &.bg-img {
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        background-origin: content-box;
      }

    &.square {
      aspect-ratio: 1 / 1;
    }

    &.four-three {
      aspect-ratio: 4 / 3;
    }

    &.sixteen-nine {
      aspect-ratio: 16 / 9;
    }

   /* @see https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/#working-around-the-problem */
   /* user must set padding[left|right|top|bottom] to a % value */
    &.pad {
      height: 0;
      overflow: hidden;

      > img {
        position: absolute;
        top: 0;
        left: 0;
      }
    }

    &.bg-img, &.square, &.four-three, &.sixteen-nine, &.pad {
      > img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
