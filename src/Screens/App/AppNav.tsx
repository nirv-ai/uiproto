import React from 'react';
import { css } from '@emotion/react';

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

const headerCss = css({
  flexFlow: 'row',
  fontSize: 'var(--fsize-5)',
  height: '1.5em',
  '& > h1': { fontSize: 'inherit' },
});

const drawerCss = css({
  flexBasis: '1.2em',
  height: '1.2em',
});

export const AppNav = () => {
  const popover = usePopoverState({ gutter: 5 });

  return (
    <header css={headerCss} className="column">
      <h1>{text.title}</h1>
      <PopoverDisclosure {...popover} css={drawerCss}>
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
