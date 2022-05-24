import { type Key, type FC } from 'react';

import { Menu, Item } from 'src/Library';
import { NavLink, A } from 'src/Library/Text/Link';

type LinkConfig = {
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

export const menuItem = (href: string, text: string): LinkConfig => ({ href, text });

export const MenuNav: FC<MenuNavProps> = ({
  renderProps = {},
  ariaLabel,
  NavType,
  links,
  onAction,
}) => {
  const useAction = (key: Key) => {
    if (onAction) onAction(key);
  };

  return (
    <Menu aria-label={ariaLabel} onAction={useAction}>
      {links.map(({ href, text }) => {
        const ThisNav = NAV_TYPES[NavType];

        return (
          <Item key={text} textValue={text}>
            <ThisNav href={href} renderProps={renderProps}>
              {text}
            </ThisNav>
          </Item>
        );
      })}
    </Menu>
  );
};

MenuNav.displayName = 'MenuNav';
