/**
 * @see https://react-spectrum.adobe.com/react-aria/useMenu.html
 * @see https://github.com/adobe/react-spectrum/tree/main/packages/%40react-aria/menu/src
 */

import React, { useRef, type FC, type ReactNode } from 'react';
import { useMenu, useMenuItem } from 'react-aria';
import { useTreeState, type TreeState } from 'react-stately';
import type { AriaMenuProps } from '@react-types/menu';

export { Item } from 'react-stately';

type MenuInterface = AriaMenuProps<HTMLUListElement>;

export const Menu: FC<MenuInterface> = props => {
  // Create state based on the incoming props
  const state = useTreeState({ ...props, selectionMode: 'none' });

  // Get props for the menu element
  const ref = useRef<HTMLUListElement>(null);
  const { menuProps } = useMenu(props, state, ref);

  return (
    <ul {...menuProps} ref={ref}>
      {[...state.collection].map(item => (
        <MenuItem key={item.key} item={item} state={state} onAction={props.onAction} />
      ))}
    </ul>
  );
};

type MenuItemProps = {
  item: {
    rendered: ReactNode;
    key: string | number;
  };
  state: TreeState<unknown>;
  onAction: ((key: React.Key) => void) | undefined;
};

// TODO: (noah) need to fully flesh out the props (check the docs)
// ^e.g. without the onAction the space/enter doesnt trigger
export const MenuItem: FC<MenuItemProps> = ({ item, state, onAction }) => {
  // Get props for the menu item element
  const ref = useRef<HTMLLIElement>(null);
  const isDisabled = state.disabledKeys.has(item.key);
  // const isFocused = state.selectionManager.focusedKey === item.key;

  const { menuItemProps } = useMenuItem(
    {
      key: item.key,
      isDisabled,
      onAction,
    },
    state,
    ref
  );

  return (
    <li {...menuItemProps} ref={ref}>
      {item.rendered}
    </li>
  );
};
