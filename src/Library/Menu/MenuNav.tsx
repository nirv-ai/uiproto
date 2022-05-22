import React, { type Key, type FC } from 'react';

import { NavLink, A, Menu, Item } from 'src/Library';

type LinkConfig = {
  key: Key;
  href: string;
  text: string;
};

interface MenuNavProps {
  NavType: 'NavLink' | 'A';
  ariaLabel: string;
  links: LinkConfig[];
  onAction?: any;
  className?: string;
}

const NAV_TYPES = { NavLink, A };

export const menuItem = (key: Key, href: string, text: string): LinkConfig => ({ key, href, text });

export const MenuNav: FC<MenuNavProps> = ({ ariaLabel, NavType, links, onAction }) => {
  // const [itemClicked, setItemClicked] = useState<Key>('');

  const useAction = (key: Key) => {
    console.info('\n\n item clicked', key);
    if (onAction) onAction(key);
    // else setItemClicked(key);
  };

  return (
    <Menu aria-label={ariaLabel} onAction={useAction}>
      {links.map(({ key, href, text }) => {
        const ThisNav = NAV_TYPES[NavType];

        return (
          <Item key={key}>
            <ThisNav href={href}>{text}</ThisNav>
          </Item>
        );
      })}
    </Menu>
  );
};
