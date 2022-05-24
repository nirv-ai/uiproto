import { type FC, type ReactElement } from 'react';
import clsx from 'clsx';

interface TextInterface {
  [x: string]: any;
  ariaRole?: string;
  block?: boolean;
  children: ReactElement;
  className?: string;
  elType?: 'p' | 'b' | 'strong' | 'em' | 'mark';
  inline?: boolean;
}

export const Span: FC<TextInterface> = ({
  ariaRole,
  block = false,
  children,
  className,
  elType,
  inline = false,
  ...props
}) => {
  const UseEl = elType ?? 'span';
  if (!elType && !ariaRole)
    throw new Error('You must provide an ariaRole or use a more semantic Text element');

  const useClass = clsx({ inline, block }, className).trim() || undefined;

  return (
    <UseEl role={ariaRole} className={useClass} {...props}>
      {children}
    </UseEl>
  );
};
Span.displayName = 'Span';

export const P = props => <Span elType="p" {...props} />;
P.displayName = 'P';

export const B = props => <Span elType="b" {...props} />;
B.displayName = 'B';

export const Em = props => <Span elType="em" {...props} />;
Em.displayName = 'Em';

export const Strong = props => <Span elType="strong" {...props} />;
Strong.displayName = 'Strong';

export const Mark = props => <Span elType="mark" {...props} />;
Mark.displayName = 'Mark';
