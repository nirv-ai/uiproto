import { Outlet } from 'react-router-dom';
import { OverlayProvider } from 'react-aria'; // for react-aria modals

import { AppCss } from './AppCss';
import { AppFooter } from './AppFooter';
import { AppNav } from './AppNav';

export const App = () => (
  <OverlayProvider css={AppCss}>
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
