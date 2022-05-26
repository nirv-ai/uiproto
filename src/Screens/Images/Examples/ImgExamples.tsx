import { type FC } from 'react';

import { Img, CopyPastas, P, type PastaItemInterface } from 'src/Library';
import tattooImageJpg from 'src/assets/images/nicJackson/tattoo.jpg';

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
    alt: 'custom fallback src when img load error',
    srcFallback: 'https://images.pexels.com/photos/11438396/pexels-photo-11438396.jpeg',
    title: 'optionally pass an onError fn or srcFallback string',
    onError: () => console.error('do something on error'),
  }),

  imgItem(Img, 'Img Element', { ...imgProps, alt: 'local image', src: tattooImageJpg }),
];

export const ImgExamples: FC<any> = () => (
  <CopyPastas title="Img Examples" pastaConfig={ImgCopyPastaConfig} />
);
