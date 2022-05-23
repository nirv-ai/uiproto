import React, { type FC, type ReactNode } from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';
import reactElementToJSXString from 'react-element-to-jsx-string';

// Copy, Pasta,
import { Separated } from 'src/Library';

interface CopyCodeInterface {
  CopyEl: any;
}

const CopyCode: FC<CopyCodeInterface> = ({ CopyEl }) => {
  const renderedString = reactElementToJSXString(CopyEl, {
    /* @ts-ignore */
    displayName: reactEl => reactEl?.type?.displayName,
  });

  return (
    <CopyBlock
      codeBlock
      language="jsx"
      showLineNumbers={true}
      startingLineNumber={0}
      text={renderedString}
      theme={dracula}
    />
  );
};

interface CopyPastaInterface {
  orientation?: 'vertical' | 'horizontal';
  PastaEl: any;
  children: ReactNode;
}
export const CopyPasta: FC<CopyPastaInterface> = ({
  orientation = 'horizontal',
  PastaEl,
  children,
}) => {
  if (typeof PastaEl.type.displayName !== 'string')
    throw new Error('PastaEl.displayName must be a string');

  const firstChildren = <CopyCode CopyEl={PastaEl} />;

  return (
    <div css={{ padding: '3rem' }}>
      {children}
      <Separated orientation={orientation} firstChildren={firstChildren} secondChildren={PastaEl} />
    </div>
  );
};
