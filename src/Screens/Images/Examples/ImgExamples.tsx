import { type FC } from 'react';

import { Img, CopyPastas, P, LazyImg, type PastaItemInterface } from 'src/Library';
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
    title: 'img errors on logged to console (open devtools)',
  }),

  imgItem(Img, 'Img Element', {
    ...imgProps,
    src: '',
    alt: 'default fallback src when img load error',
    srcFallback: 'https://images.pexels.com/photos/11438396/pexels-photo-11438396.jpeg',
    title: 'optionally pass an onError fn or srcFallback string',
    onError: () => console.error('do something on error'),
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
  }),

  imgItem(Img, 'Img Element', {
    ...imgProps,
    src: beerImageJpg,
    wrapClass: 'four-three',
    alt: 'best for images with aspect-ratio 4:3',
  }),

  imgItem(Img, 'Img Element', {
    ...imgProps,
    src: beerImageJpg,
    wrapClass: 'square',
    alt: 'best for square images',
  }),

  imgItem(Img, 'Img Element', {
    ...imgProps,
    src: beerImageJpg,
    wrapClass: 'pad',
    alt: 'set a custom aspect-ratio via css padding hack',
    wrapCss: { paddingBottom: '25%' },
    title: 'must set padding[left|right|top|bottom] to a % value',
  }),

  imgItem(LazyImg, 'LazyImg Element', {
    ...imgProps,
    alt: 'via React.lazy & React.Suspense',
    src: beerImageJpg,
  }),
];

export const ImgExamples: FC<any> = () => (
  <CopyPastas title="Img Examples" pastaConfig={ImgCopyPastaConfig} />
);
