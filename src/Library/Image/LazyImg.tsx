import { lazy, Suspense, type FC, type ReactElement } from 'react';

import { type ImgInterface } from './Img';
import { LoadingIcon } from 'src/Library';

const Img = lazy(() => import('./DefaultImg'));

export interface LazyImgInterface extends ImgInterface {
  Fallback?: ReactElement;
}

/**
 * TODO:(noah) currenly only the loading of the img src file is lazy, not hte request
 * enhance this so that the fallback is displayed until the img request is complete
 */
export const LazyImg: FC<LazyImgInterface> = ({ Fallback = LoadingIcon, ...props }) => {
  return (
    <Suspense fallback={<>Fallback</>}>
      <Img {...props} />
    </Suspense>
  );
};
LazyImg.displayName = 'LazyImg';
