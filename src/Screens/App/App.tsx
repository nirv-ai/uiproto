import React from 'react';
import { Global } from '@emotion/react';
import { Outlet } from 'react-router-dom';
import { OverlayProvider } from 'react-aria'; // for react-aria modals

import { AppFooter } from './AppFooter';
import { AppNav } from './AppNav';
import { globalStyles } from './globalCss';

import 'animate.css';

export const App = () => (
  <OverlayProvider>
    <Global styles={globalStyles} />
    <div id="outer-container">
      <div id="inner-container">
        <AppNav />
        <main id="app-wrapper">
          <Outlet />
        </main>
        <AppFooter />
      </div>
    </div>
  </OverlayProvider>
);
