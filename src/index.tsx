// todo: https://github.com/facebook/create-react-app/tree/main/packages/cra-template-typescript/template/public
import '@abraham/reflection';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { reportWebVitals } from './reportWebVitals';
import { Router } from './Router';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <Router />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.info);
