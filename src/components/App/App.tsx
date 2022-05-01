import { Global } from '@emotion/react';
import styled from '@emotion/styled';

import { globalStyles } from './globalCss';

// css
import 'animate.css';

const OuterContainer = styled.div`
  display: flex;
  flex-flow: wrap column;
  height: 100%;
  margin: 0 auto;
  overflow: visible;
  padding: 0;
`;

const InnerContainer = styled.div`
  overflow: visible;
  position: relative;
`;

const AppWrapper = styled.main`
  height: 100%;
  overflow: visible;
  padding: 10px;
`;

export const App = () => {
  return (
    <OuterContainer id="outer-container">
      <Global styles={globalStyles} />

      <InnerContainer id="inner-container">
        <AppWrapper id="app-wrapper">
          <h1>Hello world</h1>
        </AppWrapper>
      </InnerContainer>
    </OuterContainer>
  );
};
