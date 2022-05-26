import { useState, type FC, type ReactNode } from 'react';
import * as CSS from 'csstype';

import { getClass } from 'src/Library';

export interface ImgWrapperInterface {
  ariaRole?: string;
  caption?: string;
  children: ReactNode;
  className?: string;
  wrapCss?: CSS.Properties;
}

/** TODO: (noah) use Figure & Figcaption component whenever they're complete */
export const ImgWrapper: FC<ImgWrapperInterface> = ({
  ariaRole = 'img',
  caption,
  children,
  className,
  wrapCss = {},
}) => {
  const useClass = getClass('img-wrapper', className);
  return (
    <figure className={useClass} role={ariaRole} css={wrapCss as any}>
      {children}
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
};
ImgWrapper.displayName = 'ImgWrapper';

/**
 * TODO:(noah) likely should decompose this into multiple composite Img components
 */
export interface ImgInterface {
  alt?: string;
  block?: boolean;
  caption?: ImgWrapperInterface['caption'];
  className?: string;
  crossorigin?: 'anonymous' | 'use-credentials';
  decoding?: 'async' | 'auto' | 'sync';
  ElType?: string;
  fetchpriority?: 'high' | 'low' | 'auto';
  height: string; // required to reserve space preventing thrashing
  href?: string;
  loading?: 'eager' | 'lazy';
  onError?: (e: Error) => void;
  sizes?: string;
  src: string;
  srcFallback?: string;
  srcSet?: string;
  title?: string;
  useMap?: string;
  width: string; // required to reserve space preventing thrashing
  wrap?: boolean;
  wrapClass?: string;
  wrapCss?: CSS.Properties;
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
  caption,
  className,
  decoding = 'async',
  ElType,
  fetchpriority = 'low',
  height,
  loading = 'lazy',
  onError,
  referrerPolicy = 'strict-origin-when-cross-origin',
  src,
  srcFallback = 'https://via.placeholder.com/150',
  title,
  width,
  wrap = false,
  wrapClass,
  wrapCss,
  ...props
}) => {
  const [useSrc, setSrc] = useState(src);

  const handleError = e => {
    console.error(`error loading img: ${src}`, e);
    if (onError) onError(e);
    if (useSrc !== srcFallback) setSrc(srcFallback);
  };

  const useClass = getClass(className);

  let useRole;
  if (ariaRole) useRole = ariaRole;
  else
    switch (typeof alt) {
      case 'string': {
        // empty string, must be presentational
        if (!alt.length) useRole = 'presentation';
        else useRole = 'img';
        break;
      }
      // no alt, use default role
      case 'undefined': {
        useRole = 'img';
        break;
      }
    }

  const RenderImg = () => (
    <img
      {...props}
      alt={alt}
      className={useClass}
      decoding={decoding}
      height={height}
      loading={loading}
      onError={handleError}
      role={useRole}
      title={title || alt}
      width={width}
      /* @ts-ignore */
      fetchpriority={fetchpriority}
      /* @ts-ignore */
      referrerPolicy={referrerPolicy}
      src={useSrc}
    />
  );

  return (
    <>
      {wrap || wrapClass || wrapCss || caption ? (
        <ImgWrapper className={wrapClass} caption={caption} wrapCss={wrapCss}>
          <RenderImg />
        </ImgWrapper>
      ) : (
        <RenderImg />
      )}
    </>
  );
};
Img.displayName = 'Img';

/*
TODO:(noah) finish these img types
// IMG LINK
import { A } from 'src/library;
todo <a><img></a>
else if (href) useRole = 'link'; // TODO:(noah) google this
export const ImgLink
*/

// ImgCaption
/*
figure
figcaption
*/

// picture with srcset n stuff
/*
picture
*/
