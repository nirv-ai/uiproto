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
  renderProps?: { [x: string]: any };
}

const NAV_TYPES = { NavLink, A };

export const menuItem = (key: Key, href: string, text: string): LinkConfig => ({ key, href, text });

export const MenuNav: FC<MenuNavProps> = ({
  renderProps = {},
  ariaLabel,
  NavType,
  links,
  onAction,
}) => {
  const { renderProps: parentProps } = renderProps;
  // const [itemClicked, setItemClicked] = useState<Key>('');

  const useAction = (key: Key) => {
    // console.info('\n\n item clicked', key, Object.keys(renderProps));
    if (onAction) onAction(key);
    if (parentProps?.hide) parentProps.hide();
  };

  return (
    <Menu aria-label={ariaLabel} onAction={useAction}>
      {links.map(({ key, href, text }) => {
        const ThisNav = NAV_TYPES[NavType];

        return (
          <Item key={key} textValue={text}>
            <ThisNav href={href}>{text}</ThisNav>
          </Item>
        );
      })}
    </Menu>
  );
};
