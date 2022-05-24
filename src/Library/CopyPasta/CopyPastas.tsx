import { type ReactElement, type FC } from 'react';

import { CopyPasta } from './CopyPasta';
import { H3 } from 'src/Library';
import { sentences } from 'src/mocks';

export type PastaItemType = {
  PastaEl: ReactElement;
  children: ReactElement;
};

export interface PastaItemInterface {
  (El: FC<any>, about: string | string[], props?: { [x: string]: any }): PastaItemType;
}

export interface CopyPastasInterface {
  title: string;
  about?: string;
  pastaConfig: PastaItemType[];
}

const copyPastasCss = {
  marginTop: 'var(--spacing-XL)',
};

export const CopyPastas: FC<CopyPastasInterface> = ({ title, about = sentences, pastaConfig }) => (
  <>
    <H3 css={copyPastasCss}>{title}</H3>
    <p>{about}</p>
    {pastaConfig.map(({ PastaEl, children }, i) => (
      <CopyPasta key={i} PastaEl={PastaEl} orientation="horizontal">
        {children}
      </CopyPasta>
    ))}
  </>
);

CopyPastas.displayName = 'CopyPastas';
