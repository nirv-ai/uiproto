import { css } from '@emotion/react';
import { RiMenu5Line } from 'react-icons/ri';

import { MenuNav, menuItem, Popover, Strong } from 'src/Library';
import text from './text.json';
import uiProtoLogo from 'src/assets/images/uiproto_logo_200x200.png';

const appNavLinks = [
  menuItem('/', 'Home'),
  menuItem('/typography', 'Typography'),
  menuItem('/images', 'Images'),
  menuItem('/ui-elements', 'ui elements'),
  menuItem('/layout', 'Layout'),
  menuItem('/video', 'video'),
  menuItem('/animation', 'Animation'),
  menuItem('/micro-interactions', 'Micro interactions'),
];

const navCss = css({
  menu: {
    padding: 'var(--spacing-XXS)',
    li: {
      span: {
        fontWeight: '400',
        color: 'white',
        '&.active': {
          cursor: 'not-allowed',
          color: 'black',
        },
      },
    },
  },
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
  animationDelay: '1.5s',
});

const uiProtoLogoCss = css({
  objectFit: 'contain',
  maxHeight: '1em',
});

export const AppNav = () => {
  return (
    <header css={headerCss}>
      <img src={uiProtoLogo} alt="uiproto logo" css={uiProtoLogoCss} />
      <Strong className="appname h1">{text.title}</Strong>
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
