import { type FC } from 'react';

import { Text, getClass, type TextInterface } from 'src/Library';

export const parseSrcToBgImgCssProp = (src: string): string => {
  const [url, ...rest] = src.trim().split(' ');
  return `url(${url}) ${rest.join(' ')}`.trim();
};

export interface BgImgInterface extends TextInterface {
  [x: string]: any;
  alt?: string;
  block?: boolean;
  className?: string;
  gradient?: boolean;
  height?: string;
  src: string | string[];
  title?: string;
  width?: string;
}

/**
 * TODO:(noah) need to add bg gradient examples & logic
 * @see https://www.davidmacd.com/blog/alternate-text-for-css-background-images.html
 * @see https://www.davidmacd.com/blog/what-is-pure-decoration-alt-text-in-wcag.html
 * @see https://stackoverflow.com/questions/24682193/css-background-shorthand-property-not-working-with-background-size
 */
export const BgImg: FC<BgImgInterface> = ({
  alt,
  block = false,
  className,
  gradient = false,
  height,
  src,
  title,
  width,
  ...props
}) => {
  if (!gradient && !alt) {
    // TODO:(noah): convert this to a utility fn (need to add a logger anyway)
    console.error('\n\n props before error', props);
    throw new Error('You must provide an alt for all bg images that arent gradients');
  }

  if (!block && (!width || !height)) {
    console.error('\n\n props before error', props);
    throw new Error('You must provide a width and height for all bg images that arent block');
  }

  const useClass = getClass(className, 'bg-img', block ? 'block' : 'inline');

  const background = Array.isArray(src)
    ? src.map(src => parseSrcToBgImgCssProp(src)).join(', ')
    : parseSrcToBgImgCssProp(src);

  const bgImgCss = {
    width,
    height,
    background,
  };

  return (
    <Text
      {...props}
      ariaLabel={gradient ? '' : alt}
      ariaRole="img"
      className={useClass}
      css={bgImgCss}
      ElType="span"
      title={title || alt || 'image'}
    />
  );
};
BgImg.displayName = 'BgImg';
