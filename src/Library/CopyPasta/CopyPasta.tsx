import React, { type FC, type ReactNode } from 'react';

// Copy, Pasta,
import { Separated } from 'src/Library';
import { Copy } from './Copy';
import { Pasta } from './Pasta';

interface CopyPastaInterface {
  children: ReactNode;
  className?: 'string';
  orientation?: 'vertical' | 'horizontal';
  PastaEl: any;
}
export const CopyPasta: FC<CopyPastaInterface> = ({
  orientation = 'horizontal',
  PastaEl,
  children,
}) => {
  const firstChildren = <Copy CopyEl={PastaEl} />;
  const secondChildren = <Pasta PastaEl={PastaEl} />;

  return (
    <div css={{ padding: '0.2rem 3rem 1rem' }}>
      {children}
      <Separated
        className="code"
        orientation={orientation}
        firstChildren={firstChildren}
        secondChildren={secondChildren}
      />
    </div>
  );
};
