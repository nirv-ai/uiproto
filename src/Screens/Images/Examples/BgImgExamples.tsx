import { type FC } from 'react';

import { CopyPastas, P, BgImg, type PastaItemInterface } from 'src/Library';
import computerImgJpg from 'src/assets/images/nicJackson/computer.jpg';
import photogapherImgJpg from 'src/assets/images/nicJackson/photographer.jpg';

const bgImgItem: PastaItemInterface = (El, about, props = {}) => ({
  PastaEl: <El {...props} />,
  children: <P>{about}</P>,
});

const imgProps = {
  alt: 'placeholder',
  src: 'https://via.placeholder.com/150',
  width: '150px',
  height: '150px',
};

const BgImgCopyPastaConfig = [
  bgImgItem(BgImg, 'BgImg Element', {
    ...imgProps,
    src: `${computerImgJpg} no-repeat 0 0 /contain`,
    alt: 'ima span with a background-image',
  }),
  bgImgItem(BgImg, 'BgImg Element', {
    ...imgProps,
    width: '100%',
    src: `${computerImgJpg} center center /cover no-repeat `,
    alt: 'ima span with a background-image',
  }),
  bgImgItem(BgImg, 'BgImg Element', {
    ...imgProps,
    width: '100%',
    block: true,
    src: [`${computerImgJpg} no-repeat 0 0 /150px`, `${photogapherImgJpg} no-repeat 100% 0 /150px`],
    alt: 'ima span with a background-image',
  }),
];

export const BgImgExamples: FC<any> = () => (
  <CopyPastas title="Bg Img Examples" pastaConfig={BgImgCopyPastaConfig} />
);
