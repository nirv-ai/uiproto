import { type Key, type FC } from 'react';

import { Menu, Item } from 'src/Library';
import { NavLink, type LinkInterface } from 'src/Library/Text/Link';

interface MenuItemInterface {
  (href: string, ariaLabel: string, ...props): LinkInterface;
}

export const menuItem: MenuItemInterface = (href, children, ariaLabel, ElType, ...props) => ({
  ariaLabel,
  children,
  ElType,
  href,
  ...props,
});

interface MenuNavProps {
  ariaLabel: string;
  links: LinkInterface[];
  onAction?: any;
  renderProps?: { [x: string]: any };
}

export const MenuNav: FC<MenuNavProps> = ({ renderProps = {}, ariaLabel, links, onAction }) => {
  const useAction = (key: Key) => {
    if (onAction) onAction(key);
  };

  return (
    <Menu aria-label={ariaLabel} onAction={useAction}>
      {links.map(props => {
        const { ariaLabel: linkAriaLabel, ElType, ...linkProps } = props;

        return (
          <Item key={linkAriaLabel} textValue={linkAriaLabel}>
            <NavLink
              {...linkProps}
              ariaLabel={linkAriaLabel}
              ariaRole="link"
              renderProps={renderProps}
            />
          </Item>
        );
      })}
    </Menu>
  );
};

MenuNav.displayName = 'MenuNav';
