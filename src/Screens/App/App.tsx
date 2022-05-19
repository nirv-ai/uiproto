import React from 'react';
import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';
import { OverlayProvider } from 'react-aria'; // for react-aria modals

import { AppFooter } from './AppFooter';
import { AppNav } from './AppNav';
import { globalStyles } from './globalCss';

const OuterContainer = styled.div`
  display: flex;
  flex-flow: wrap column;
  height: 100%;
  margin: 0 auto;
  padding: 0;
`;

const InnerContainer = styled.div`
  position: relative;
`;

const AppWrapper = styled.main`
  height: 100%;
  padding: 10px;
`;

export const App = () => (
  <OverlayProvider>
    <OuterContainer id="outer-container">
      <Global styles={globalStyles} />
      <InnerContainer id="inner-container">
        <AppNav />
        <AppWrapper id="app-wrapper">
          <Outlet />
        </AppWrapper>
        <AppFooter />
      </InnerContainer>
    </OuterContainer>
  </OverlayProvider>
);
