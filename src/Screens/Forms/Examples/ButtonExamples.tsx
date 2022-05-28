import { type FC } from 'react';
import { BiBot } from 'react-icons/bi';

import {
  Button,
  CopyPastas,
  Icons,
  LoadingIcon,
  P,
  ResetButton,
  SubmitButton,
  type PastaItemInterface,
} from 'src/Library';

/* @ts-ignore */
BiBot.displayName = 'BiBot';

const buttonItem: PastaItemInterface = (El, about, props = {}) => ({
  PastaEl: <El {...props}>{props.desc ? <BiBot /> : 'Clickable'}</El>,
  children: <P>{about}</P>,
});

const ButtonCopyPastaConfig = [
  buttonItem(Icons, 'Icons Element', { desc: 'default renders a button' }),

  {
    PastaEl: (
      <LoadingIcon desc="Icons can render as any element" ElType="span" ariaRole="presentation" />
    ),
    children: <p></p>,
  },

  buttonItem(Button, 'Button Element'),
  buttonItem(SubmitButton, 'Form Submit Button Element', { name: 'my-name', value: 'my-value' }),
  buttonItem(ResetButton, 'Form Reset Button'),
];

export const ButtonExamples: FC<any> = () => (
  <CopyPastas title="Button Examples" pastaConfig={ButtonCopyPastaConfig} />
);
