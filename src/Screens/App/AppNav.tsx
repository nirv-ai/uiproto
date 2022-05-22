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

const navCss = css({
  ul: {
    'li:first-child': {
      paddingTop: '0.2em',
    },
    'li:last-child': {
      paddingBottom: '0.2em',
    },
    li: {
      span: {
        fontWeight: '100',
        paddingLeft: '0.4em',
        paddingRight: '0.4em',
        color: 'white',
        '&.active': {
          cursor: 'not-allowed',
          color: 'black',
        },
      },
    },
  },
});

const h1Css = css({
  fontWeight: 100,
});

const headerCss = css({
  animation: 'bounce',
  animationDuration: '2s',
});

const drawerCss = css({
  flexBasis: '1.2em',
  height: '1em',
  animation: 'flip',
  animationDuration: '1s',
  animationDelay: '2s',
});

const uiProtoLogoCss = css({
  objectFit: 'contain',
  maxHeight: '1em',
});

export const AppNav = () => {
  return (
    <header css={headerCss}>
      <img src={uiProtoLogo} alt="uiproto logo" css={uiProtoLogoCss} />
      <h1 css={h1Css}>{text.title}</h1>
      <Popover
        aria-label="Custom popover"
        disclosure={
          <button css={drawerCss}>
            <RiMenu5Line />
          </button>
        }
      >
        {(renderProps = {}) => {
          return (
            <nav css={navCss}>
              <MenuNav
                ariaLabel="application-nav"
                links={appNavLinks}
                NavType="NavLink"
                renderProps={renderProps}
              />
            </nav>
          );
        }}
      </Popover>
    </header>
  );
};
