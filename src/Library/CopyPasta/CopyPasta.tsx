import React from 'react';

import { Copy, Pasta, Separated } from 'src/Library';

export const CopyPasta = () => {
  return (
    <article>
      <Separated orientation="horizontal" firstChildren={<Copy />} secondChildren={<Pasta />} />
    </article>
  );
};
