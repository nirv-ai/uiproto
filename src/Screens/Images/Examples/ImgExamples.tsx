import { type FC } from 'react';

import { Img, CopyPastas, P, type PastaItemInterface } from 'src/Library';

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

const ImgCopyPastaConfig = [imgItem(Img, 'Img Element', imgProps)];

export const ImgExamples: FC<any> = () => (
  <CopyPastas title="Img Examples" pastaConfig={ImgCopyPastaConfig} />
);
