import { type FC, type ReactNode } from 'react';

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
    <section css={{ padding: 'var(--spacing-XS) var(--spacing-XXS)' }}>
      {children}
      <Separated
        className="code"
        orientation={orientation}
        firstChildren={firstChildren}
        secondChildren={secondChildren}
      />
    </section>
  );
};
