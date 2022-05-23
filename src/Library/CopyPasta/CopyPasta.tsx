import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import { Copy, Pasta, Separated } from 'src/Library';

const CopyCode = () => <code>{renderToStaticMarkup(<Copy />)}</code>;

export const CopyPasta = () => {
  return (
    <Separated orientation="horizontal" firstChildren={<CopyCode />} secondChildren={<Pasta />} />
  );
};
