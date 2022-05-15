import React from 'react';

import { MenuNav, menuItem } from '../../Library';
import appJson from './app.json';

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
  fontSize: 'var(--fsize-5)',
  '& > h1': { fontSize: 'inherit ' },
};

export const AppNav = () => (
  <header css={headerCss}>
    <h1>{appJson.title}</h1>
    <nav className="block">
      <MenuNav NavType="NavLink" ariaLabel="application-nav" links={appNavLinks} />
    </nav>
  </header>
);
