import { type FC } from 'react';

import { Checkbox, CopyPastas, P, type PastaItemInterface } from 'src/Library';

const Child = () => <span>ima child</span>;
Child.displayName = 'Child';

const checkboxItem: PastaItemInterface = (El, about, { children, ...props }: any) => ({
  PastaEl: <El {...props}>{children}</El>,
  children: <P>{about}</P>,
});

const CheckboxCopyPastaConfig = [
  checkboxItem(Checkbox, 'Checkbox Element', {
    value: 'my value',
    ariaLabel: 'ima aria-label',
  }),

  checkboxItem(Checkbox, 'Checkbox Element', {
    value: 'my value',
    label: 'ima label',
  }),

  checkboxItem(Checkbox, 'Checkbox Element', {
    value: 'my value',
    checkboxLast: true,
    children: <Child />,
  }),
];

export const CheckboxExamples: FC<any> = () => (
  <CopyPastas title="Checkbox Examples" pastaConfig={CheckboxCopyPastaConfig} />
);
