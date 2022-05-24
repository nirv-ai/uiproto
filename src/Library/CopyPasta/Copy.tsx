import { type FC } from 'react';

import { CopyBlock, dracula } from 'react-code-blocks';
import reactElementToJSXString from 'react-element-to-jsx-string';

interface CopyInterface {
  CopyEl: any;
}

export const Copy: FC<CopyInterface> = ({ CopyEl }) => {
  const renderedString = reactElementToJSXString(CopyEl, {
    displayName: reactEl => {
      /* @ts-ignore */
      const displayName = reactEl?.type?.displayName ?? reactEl.type.name;

      if (typeof displayName !== 'string') {
        throw new Error('CopyEl.displayName must be a string');
      }

      return displayName;
    },
  });

  return (
    <pre>
      <code className="code">
        <CopyBlock
          codeBlock
          language="jsx"
          showLineNumbers={true}
          startingLineNumber={0}
          text={renderedString}
          theme={dracula}
        />
      </code>
    </pre>
  );
};
