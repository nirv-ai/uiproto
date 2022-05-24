import { type FC } from 'react';

import { CopyPastas, P, NavLink, A, Link, type PastaItemInterface } from 'src/Library';

const linkItem: PastaItemInterface = (El, about, props = {}) => ({
  PastaEl: <El {...props}>click to go</El>,
  children: <P>{about}</P>,
});

const navLinkPropsDisabled = {
  href: '/typography',
  ariaLabel: 'active links are disabled',
};

const navLinkProps = {
  href: '/home',
  ariaLabel: 'non active links are clickable via react router navigate',
};

const aProps = {
  ...navLinkProps,
  href: 'http://poop.com',
  ariaLabel: 'a normal anchor link',
};

const linkProps = {
  ...aProps,
  ariaLabel: 'any Text component can be a link',
  ariaRole: 'link',
  ElType: 'strong',
  target: '_blank',
};

const LinkCopyPastaConfig = [
  linkItem(A, 'Anchor Element', aProps),
  linkItem(NavLink, 'NavLink Element (disabled)', navLinkPropsDisabled),
  linkItem(NavLink, 'NavLink Element', navLinkProps),
  linkItem(Link, 'Link Element', linkProps),
];

export const LinkExamples: FC<any> = () => (
  <CopyPastas title="Link Examples" pastaConfig={LinkCopyPastaConfig} />
);
