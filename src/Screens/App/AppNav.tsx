import React from 'react';
import { RiMenu5Line } from 'react-icons/ri';
import { usePopoverState, Popover, PopoverDisclosure } from 'reakit/Popover';

import { MenuNav, menuItem } from '../../Library';
import text from './text.json';

const appNavLinks = [
  menuItem('home', '/', 'Home'),
  menuItem('typography', '/typography', 'Typography'),
  menuItem('animation', '/animation', 'Animation'),
  menuItem('images', '/images', 'Images'),
  menuItem('layout', '/layout', 'Layout'),
  menuItem('microinteractions', '/micro-interactions', 'Micro interactions'),
  menuItem('uielements', '/ui-elements', 'ui elements'),
];

const headerCss = {
  flexFlow: 'row',
  fontSize: 'var(--fsize-5)',
  '& > h1': { fontSize: 'inherit' },
};

export const AppNav = () => {
  const popover = usePopoverState();

  return (
    <header css={headerCss} className="column">
      <h1>{text.title}</h1>
      <PopoverDisclosure {...popover} css={{ flexBasis: '50px' }}>
        <RiMenu5Line />
      </PopoverDisclosure>
      <Popover {...popover} aria-label="Welcome">
        <nav>
          <MenuNav NavType="NavLink" ariaLabel="application-nav" links={appNavLinks} />
        </nav>
      </Popover>
    </header>
  );
};
