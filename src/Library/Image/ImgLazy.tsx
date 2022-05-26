import { lazy, Suspense, type FC, type ReactElement } from 'react';

import { type ImgInterface } from './Img';
import { LoadingIcon } from 'src/Library';

const Img = lazy(() => import('./ImgDefault'));

export interface LazyImgInterface extends ImgInterface {
  Fallback?: ReactElement;
}

export const LazyImg: FC<LazyImgInterface> = ({ Fallback = LoadingIcon, ...props }) => {
  return (
    <Suspense fallback={<>Fallback</>}>
      <Img {...props} />
    </Suspense>
  );
};
LazyImg.displayName = 'LazyImg';
