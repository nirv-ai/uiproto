import { type FC } from 'react';

import { Img, Picture, CopyPastas, P, type PastaItemInterface } from 'src/Library';
import beerImageJpg from 'src/assets/images/nicJackson/beer.jpg?sizes[]=300,sizes[]=600,sizes[]=1024,sizes[]=2048&useResponsiveLoader=true';
import beerImageWebp from 'src/assets/images/nicJackson/beer.jpg';

console.info('\n\n wtf images', beerImageJpg, beerImageWebp);
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
