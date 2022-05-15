import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

import 'animate.css';
import { AppLanding } from './AppLanding';
import { AppLayout } from './AppLayout';
import { Typography, Animation, Images, Layout, MicroInteractions, UIElements } from '..';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<AppLanding />} />
          <Route path="animation" element={<Animation />} />
          <Route path="images" element={<Images />} />
          <Route path="Layout" element={<Layout />} />
          <Route path="MicroInteractions" element={<MicroInteractions />} />
          <Route path="typography" element={<Typography />} />
          <Route path="UIElements" element={<UIElements />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
