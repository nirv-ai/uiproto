import React from 'react';
import { css } from '@emotion/react';

import { RiMenu5Line } from 'react-icons/ri';
import { MenuNav, menuItem, Popover } from '../../Library';
import text from './text.json';
import uiprotoLogo from 'src/assets/images/uiproto_logo_200x200.png';

const appNavLinks = [
  menuItem('home', '/', 'Home'),
  menuItem('typography', '/typography', 'Typography'),
  menuItem('animation', '/animation', 'Animation'),
  menuItem('images', '/images', 'Images'),
  menuItem('layout', '/layout', 'Layout'),
  menuItem('microinteractions', '/micro-interactions', 'Micro interactions'),
  menuItem('uielements', '/ui-elements', 'ui elements'),
];

const drawerCss = css({
  flexBasis: '1.2em',
  height: '1em',
});

const uiprotoLogoCss = css({
  objectFit: 'contain',
  maxHeight: '1em',
});

export const AppNav = () => {
  return (
    <header>
      <img src={uiprotoLogo} alt="uiproto logo" css={uiprotoLogoCss} />
      <h1>{text.title}</h1>
      <Popover
        aria-label="Custom popover"
        disclosure={
          <button css={drawerCss}>
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
