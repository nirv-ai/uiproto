import React from 'react';
import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';

import { globalStyles } from './globalCss';
import { AppNav } from './AppNav';
import { AppFooter } from './AppFooter';

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

export const AppLayout = () => (
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
);
