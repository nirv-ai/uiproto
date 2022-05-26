import { type FC } from 'react';
import { BiBot } from 'react-icons/bi';

import {
  Button,
  CopyPastas,
  IconButton,
  LoadingIcon,
  P,
  ResetButton,
  SubmitButton,
  Toggle,
  type PastaItemInterface,
} from 'src/Library';

/* @ts-ignore */
BiBot.displayName = 'BiBot';

const buttonItem: PastaItemInterface = (El, about, props = {}) => ({
  PastaEl: <El {...props}>{props.desc ? <BiBot /> : 'Clickable'}</El>,
  children: <P>{about}</P>,
});

const ButtonCopyPastaConfig = [
  buttonItem(IconButton, 'Icon Button Element', { desc: 'for screen readers only' }),
  {
    PastaEl: <LoadingIcon desc="Various default icons are setup in src/Library somewhere" />,
    children: <p></p>,
  },
  buttonItem(Button, 'Button Element'),
  buttonItem(SubmitButton, 'Form Submit Button Element', { name: 'my-name', value: 'my-value' }),
  buttonItem(ResetButton, 'Form Reset Button'),
  buttonItem(Toggle, 'Toggle Element'),
];

export const ButtonExamples: FC<any> = () => (
  <CopyPastas title="Button Examples" pastaConfig={ButtonCopyPastaConfig} />
);
