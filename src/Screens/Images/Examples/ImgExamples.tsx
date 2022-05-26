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
  height: '150px',
};

const ImgCopyPastaConfig = [
  imgItem(Img, 'Img Element', { ...imgProps, alt: 'remote image' }),

  imgItem(Img, 'Img Element', {
    ...imgProps,
    src: '',
    alt: 'default fallback src when img load error',
  }),

  imgItem(Img, 'Img Element', { ...imgProps, alt: 'local image', src: beerImageJpg }),

  imgItem(Img, 'Img Element', {
    ...imgProps,
    src: beerImageJpg,
    className: 'width-only',
    height: '100000000000000px',
    alt: 'width-only sets css max-width and overrides html height via css',
  }),

  imgItem(Img, 'Img Element', {
    ...imgProps,
    src: beerImageJpg,
    className: 'height-only',
    width: '100000000000000px',
    alt: 'width-only sets css max-height and overrides html width via css',
  }),

  imgItem(Img, 'Img Element', {
    ...imgProps,
    src: beerImageJpg,
    wrapClass: 'sixteen-nine',
    alt: 'best for images with aspect-ratio 16:9',
    title: 'this img isnt 16:9, so its centered horizontally',
  }),

  imgItem(Img, 'Img Element', {
    ...imgProps,
    src: beerImageJpg,
    wrapClass: 'four-three',
    alt: 'best for images with aspect-ratio 4:3',
    title: 'this img isnt 4:3, so its centered vertically',
  }),

  imgItem(Img, 'Img Element', {
    ...imgProps,
    src: beerImageJpg,
    wrapClass: 'pad',
    alt: 'set a custom aspect-ratio via css padding hack',
    wrapCss: { paddingBottom: '25%' },
    title: 'must set padding[left|right|top|bottom] to a % value',
  }),
];

export const ImgExamples: FC<any> = () => (
  <CopyPastas title="Img Examples" pastaConfig={ImgCopyPastaConfig} />
);
