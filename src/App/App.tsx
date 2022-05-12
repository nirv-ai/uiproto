import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

import 'animate.css';
import { AppLanding } from './AppLanding';
import { AppLayout } from './AppLayout';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<AppLanding />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
