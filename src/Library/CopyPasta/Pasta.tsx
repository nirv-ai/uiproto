import { type FC } from 'react';

interface PastaInterface {
  PastaEl: any;
}

export const Pasta: FC<PastaInterface> = ({ PastaEl }) => {
  return <section>{PastaEl}</section>;
};

Pasta.displayName = 'Pasta';
