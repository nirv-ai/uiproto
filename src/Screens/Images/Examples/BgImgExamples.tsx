import { type FC } from 'react';

import { CopyPastas, P, BgImg, type PastaItemInterface } from 'src/Library';
import computerImgJpg from 'src/assets/images/nicJackson/computer.jpg';

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
    src: computerImgJpg,
    alt: 'ima span with a background-image',
  }),
];

export const BgImgExamples: FC<any> = () => (
  <CopyPastas title="Bg Img Examples" pastaConfig={BgImgCopyPastaConfig} />
);
