import { forwardRef, type FC, type ReactNode } from 'react';

import { getClass } from 'src/Library/Utils';

export interface TextInterface {
  [x: string]: any;
  ariaLabel?: string;
  ariaRole?: string;
  block?: boolean;
  children?: ReactNode;
  className?: string;
  ElType:
    | 'a'
    | 'b'
    | 'button'
    | 'em'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'mark'
    | 'p'
    | 'small'
    | 'span'
    | 'strong';
  forwardedRef?: any;
  inline?: boolean;
}

export const Text: FC<TextInterface> = ({
  ariaLabel,
  ariaRole,
  block = false,
  children,
  className,
  ElType,
  inline = false,
  forwardedRef,
  ...props
}) => {
  switch (ElType) {
    case 'span': {
      if (!ariaRole) {
        console.error('\n\n props before error', props);
        throw new Error('You must provide an ariaRole or use a more semantic Text element');
      }
      break;
    }
    case 'a': {
      if (ElType === 'a' && !ariaLabel) {
        console.error('\n\n props before error', props);
        throw new Error('You must provide an ariaLabel for all anchor tags');
      }

      break;
    }
    default: {
      if (props.href && (!ariaLabel || !ariaRole)) {
        console.error('\n\n props before error', props);
        throw new Error(
          'You must provide an ariaLabel and ariaRole for all link type Text components'
        );
      }
    }
  }

  const useClass = getClass(inline, block, className);

  return (
    <ElType
      aria-label={ariaLabel}
      className={useClass}
      ref={forwardedRef}
      role={ariaRole}
      {...props}
    >
      {children}
    </ElType>
  );
};
Text.displayName = 'Text';

export const TextWithRef = forwardRef((props: TextInterface, ref) => {
  return <Text {...props} forwardedRef={ref} />;
});
TextWithRef.displayName = 'TextWithRef';

export const P = props => <Text ElType="p" {...props} />;
P.displayName = 'P';

export const B = props => <Text ElType="b" {...props} />;
B.displayName = 'B';

export const Em = props => <Text ElType="em" {...props} />;
Em.displayName = 'Em';

export const Strong = props => <Text ElType="strong" {...props} />;
Strong.displayName = 'Strong';

export const Mark = props => <Text ElType="mark" {...props} />;
Mark.displayName = 'Mark';

export const Small = props => <Text ElType="small" {...props} />;
Small.displayName = 'Small';

export const Span = props => <Text ElType="span" {...props} />;
Span.displayName = 'Span';
