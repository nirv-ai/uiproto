import { type FC } from 'react';

import { Img, type ImgInterface } from './Img';

// TODO: (noah) review https://github.com/dazuaz/responsive-loader
// ^ skipping responsive loader for the time being
// ^ likely just build a custom webpack loader based on sharp.js
export type PictureInterface = {
  sizes?: string;
  image: ImgInterface;
  webp: ImgInterface;
};

export const Picture: FC<PictureInterface> = ({
  image,
  sizes = '(min-width: 1024px) 1024px, 100vw',
  webp,
}) => {
  return (
    <picture>
      <source srcSet={webp.srcSet} type="image/webp" sizes="(min-width: 1024px) 1024px, 100vw" />
      <Img {...image} loading="lazy" />
    </picture>
  );
};
