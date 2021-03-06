import { css } from '@emotion/react';
import { RiMenu5Line } from 'react-icons/ri';

import { MenuNav, menuItem, Popover, Strong, Img } from 'src/Library';
import { text } from './text';
import uiProtoLogo from 'src/assets/images/uiproto_logo_200x200.png';

const appNavLinks = [
  menuItem('/', 'Home', 'Home Screen'),
  menuItem('/typography', 'Typography', 'Typography Screen'),
  menuItem('/images', 'Images', 'Images Screen'),
  menuItem('/forms', 'forms', 'Forms Screen'),
  menuItem('/ui-elements', 'ui elements', 'UI Elements Screen'),
  menuItem('/layout', 'Layout', 'Layout Screen'),
  menuItem('/video', 'video', 'Video Screen'),
  menuItem('/animation', 'Animation', 'Animation Screen'),
  menuItem('/micro-interactions', 'Micro interactions', 'Micro Interactions Screen'),
];

const navCss = css({
  menu: {
    padding: 'var(--spacing-XXS)',
    li: {
      span: {
        fontWeight: '400',
        color: 'white',
        '&.active': {
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
  maxHeight: '1rem',
});

export const AppNav = () => {
  return (
    <header css={headerCss}>
      <Img
        src={uiProtoLogo}
        alt="UIProto Logo"
        css={uiProtoLogoCss}
        ariaRole="presentation"
        width="50px"
        height="50px"
      />
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
              <MenuNav ariaLabel="application-nav" links={appNavLinks} renderProps={renderProps} />
            </nav>
          );
        }}
      </Popover>
    </header>
  );
};
