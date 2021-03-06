import { type FC } from 'react';

import {
  CheckboxInGroup,
  CheckboxGroup,
  CopyPastas,
  P,
  type PastaItemInterface,
} from 'src/Library';

const CheckboxGroupItem: PastaItemInterface = (El, about, props: any) => ({
  PastaEl: (
    <El {...props}>
      <CheckboxInGroup value="first" label="one" checkboxLast />
      <CheckboxInGroup value="second" label="two" />
    </El>
  ),
  children: <P>{about}</P>,
});

const CheckboxCopyPastaConfig = [
  CheckboxGroupItem(CheckboxGroup, 'Checkbox Element', {
    label: 'Checkbox Group',
  }),
];

export const CheckboxGroupExamples: FC<any> = () => (
  <CopyPastas title="Checkbox Group Examples" pastaConfig={CheckboxCopyPastaConfig} />
);
