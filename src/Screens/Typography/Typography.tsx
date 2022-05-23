import React, { type FC } from 'react';

import text from './text.json';
import { sentences } from 'src/mocks';
import { CopyPasta } from 'src/Library';

interface TypographyIntroInterface {
  hello?: string;
}
export const TypographyIntro: FC<TypographyIntroInterface> = () => (
  <section>
    <h2>{text.title}</h2>
    <p>{text.subtitle}</p>
    <p>{sentences}</p>
  </section>
);

TypographyIntro.displayName = 'TypographyIntro';

export const Typography = () => (
  <article>
    <TypographyIntro />
    <div>I am a div</div>
    <CopyPasta PastaEl={<TypographyIntro hello="goodbye" />}>
      <h2>this is an explanation</h2>
    </CopyPasta>
  </article>
);
