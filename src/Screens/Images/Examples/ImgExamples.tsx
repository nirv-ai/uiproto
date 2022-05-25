import { type FC } from 'react';

import { Img, CopyPastas, P, type PastaItemInterface } from 'src/Library';
import beerImageJpg from 'src/assets/images/nicJackson/beer.jpg';

const imgItem: PastaItemInterface = (El, about, props = {}) => ({
  PastaEl: <El {...props} />,
  children: <P>{about}</P>,
});

const imgProps = {
  alt: 'placeholder',
  src: 'https://via.placeholder.com/150',
  width: '150px',
};

const ImgCopyPastaConfig = [
  imgItem(Img, 'Img Element', { ...imgProps, alt: 'remote image' }),
  imgItem(Img, 'Img Element', { ...imgProps, alt: 'local image', src: beerImageJpg }),
  imgItem(Img, 'Img Element', {
    ...imgProps,
    src: '',
    alt: 'default fallback src when img load error',
  }),
  // imgItem(Picture, 'Picture Element', {
  //   image: beerImageJpg,
  //   webp: beerImageWebp,
  // }),
];

export const ImgExamples: FC<any> = () => (
  <CopyPastas title="Img Examples" pastaConfig={ImgCopyPastaConfig} />
);
