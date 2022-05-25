import { type FC } from 'react';

import { getClass } from 'src/Library';

export interface ImgInterface {
  alt?: string;
  block?: boolean;
  className?: string;
  crossorigin?: 'anonymous' | 'use-credentials';
  decoding?: 'async' | 'auto' | 'sync';
  ElType?: string;
  fetchpriority?: 'high' | 'low' | 'auto';
  height?: number | string;
  href?: string;
  imgClass?: string;
  loading?: 'eager' | 'lazy';
  onError?: (e: Error) => void;
  sizes?: string;
  src: string;
  srcSet?: string;
  useMap?: string;
  width?: number | string;
  referrerPolicy?:
    | 'origin-only' // ts doesnt like this
    | 'no-referrer-when-downgrade'
    | 'no-referrer'
    | 'origin-when-cross-origin'
    | 'strict-origin-when-cross-origin'
    | 'strict-origin'
    | 'unsafe-url';
  ariaRole?:
    | 'button'
    | 'checkbox'
    | 'link'
    | 'menuitem'
    | 'menuitemcheckbox'
    | 'menuitemradio'
    | 'none'
    | 'option'
    | 'presentation'
    | 'progressbar'
    | 'scrollbar'
    | 'separator'
    | 'slider'
    | 'switch'
    | 'tab'
    | 'treeitem';
}

export const Img: FC<ImgInterface> = ({
  alt,
  ariaRole,
  block,
  className,
  decoding = 'async',
  ElType,
  fetchpriority = 'low',
  height,
  imgClass,
  loading = 'lazy',
  onError,
  referrerPolicy = 'strict-origin-when-cross-origin',
  src,
  width,
  ...props
}) => {
  const handleError = e => {
    console.error(`error loading img: ${src}`, e);
    if (onError) onError(e);
  };

  const useClass = getClass(imgClass, className);

  let useRole;
  if (ariaRole) useRole = ariaRole;
  else
    switch (typeof ariaRole) {
      // empty string, must be presentational
      case 'string': {
        useRole = 'presentation';
        break;
      }
      // no alt, use default role
      case 'undefined': {
        useRole = 'img';
        break;
      }
    }

  return (
    <img
      {...props}
      alt={alt}
      className={useClass}
      decoding={decoding}
      height={height}
      role={useRole}
      width={width}
      /* @ts-ignore */
      fetchpriority={fetchpriority}
      loading={loading}
      onError={handleError}
      /* @ts-ignore */
      referrerPolicy={referrerPolicy}
      src={src}
    />
  );
};
Img.displayName = 'Img';

/*
import { A } from 'src/library;
todo <a><img></a>
else if (href) useRole = 'link'; // TODO:(noah) google this
export const ImgLink
*/

/*
figure
figcaption
*/

/*
picture
*/
