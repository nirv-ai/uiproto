import React from 'react';
import { css } from '@emotion/react';

import { MenuNav, menuItem, Popover } from 'src/Library';
import { RiMenu5Line } from 'react-icons/ri';
import text from './text.json';
import uiProtoLogo from 'src/assets/images/uiproto_logo_200x200.png';

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

const uiProtoLogoCss = css({
  objectFit: 'contain',
  maxHeight: '1em',
});

const navCss = css({
  ul: {
    li: {
      span: { color: 'white' },
    },
  },
});

export const AppNav = () => {
  return (
    <header>
      <img src={uiProtoLogo} alt="uiproto logo" css={uiProtoLogoCss} />
      <h1>{text.title}</h1>
      <Popover
        aria-label="Custom popover"
        gutter={0}
        disclosure={
          <button css={drawerCss}>
            <RiMenu5Line />
          </button>
        }
      >
        <nav css={navCss}>
          <MenuNav NavType="NavLink" ariaLabel="application-nav" links={appNavLinks} />
        </nav>
      </Popover>
    </header>
  );
};
