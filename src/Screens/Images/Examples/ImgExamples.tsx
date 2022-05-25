import { type FC } from 'react';

import { Img, Picture, CopyPastas, P, type PastaItemInterface } from 'src/Library';
import beerImageJpg from 'src/assets/images/nicJackson/beer.jpg?&srcset';
// import beerImageJpgph from 'src/assets/images/nicJackson/beer.jpg?placeholder';
import beerImageWebp from 'src/assets/images/nicJackson/beer.jpg';

console.info('\n\n wtf images', beerImageJpg);
const imgItem: PastaItemInterface = (El, about, props = {}) => ({
  PastaEl: <El {...props} />,
  children: <P>{about}</P>,
});

const imgProps = {
  alt: 'placeholder',
  height: '150px',
  src: 'https://via.placeholder.com/150',
  width: '150px',
};

const ImgCopyPastaConfig = [
  imgItem(Img, 'Img Element', imgProps),
  imgItem(Picture, 'Picture Element', {
    image: beerImageJpg,
    webp: beerImageWebp,
  }),
];

export const ImgExamples: FC<any> = () => (
  <CopyPastas title="Img Examples" pastaConfig={ImgCopyPastaConfig} />
);
