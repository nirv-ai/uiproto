import { type FC } from 'react';

import { CopyPastas, P, LazyImg, type PastaItemInterface } from 'src/Library';
import beerImageJpg from 'src/assets/images/nicJackson/beer.jpg';

const lazyImgItem: PastaItemInterface = (El, about, props = {}) => ({
  PastaEl: <El {...props} />,
  children: <P>{about}</P>,
});

const imgProps = {
  alt: 'placeholder',
  src: 'https://via.placeholder.com/150',
  width: '150px',
  height: '150px',
};

const LazyImgCopyPastaConfig = [
  lazyImgItem(LazyImg, 'LazyImg Element', {
    ...imgProps,
    alt: 'via React.lazy & React.Suspense',
    src: beerImageJpg,
  }),

  lazyImgItem(LazyImg, 'LazyImg Element', {
    ...imgProps,
    src: beerImageJpg,
    className: 'width-only',
    height: '100000000000000px',
    alt: 'width-only sets css max-width and overrides html height via css',
  }),

  lazyImgItem(LazyImg, 'LazyImg Element', {
    ...imgProps,
    src: beerImageJpg,
    className: 'height-only',
    width: '100000000000000px',
    alt: 'width-only sets css max-height and overrides html width via css',
  }),

  lazyImgItem(LazyImg, 'LazyImg Element', {
    ...imgProps,
    src: beerImageJpg,
    wrapClass: 'sixteen-nine',
    alt: 'best for images with aspect-ratio 16:9',
  }),

  lazyImgItem(LazyImg, 'LazyImg Element', {
    ...imgProps,
    src: beerImageJpg,
    wrapClass: 'four-three',
    alt: 'best for images with aspect-ratio 4:3',
  }),

  lazyImgItem(LazyImg, 'LazyImg Element', {
    ...imgProps,
    src: beerImageJpg,
    wrapClass: 'square',
    alt: 'best for square images',
  }),

  lazyImgItem(LazyImg, 'LazyImg Element', {
    ...imgProps,
    src: beerImageJpg,
    wrapClass: 'pad',
    alt: 'set a custom aspect-ratio via css padding hack',
    wrapCss: { paddingBottom: '25%' },
    title: 'must set padding[left|right|top|bottom] to a value',
  }),
];

export const LazyImgExamples: FC<any> = () => (
  <CopyPastas title="Lazy Img Examples" pastaConfig={LazyImgCopyPastaConfig} />
);
