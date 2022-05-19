import React from 'react';
import { css } from '@emotion/react';

import { RiMenu5Line } from 'react-icons/ri';
import { MenuNav, menuItem, Popover } from '../../Library';
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

// const drawerCss = css({
//   flexBasis: '1.2em',
//   height: '1.2em',
// });

/*
<PopoverDisclosure {...popover} css={drawerCss}>
*/
// <RiMenu5Line />

export const AppNav = () => {
  return (
    <header css={headerCss} className="column">
      <h1>{text.title}</h1>
      <Popover
        aria-label="Custom popover"
        disclosure={
          <button>
            <RiMenu5Line />
          </button>
        }
      >
        <nav>
          <MenuNav NavType="NavLink" ariaLabel="application-nav" links={appNavLinks} />
        </nav>
      </Popover>
    </header>
  );
};
