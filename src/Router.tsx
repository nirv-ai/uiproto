import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

import {
  Animation,
  App,
  Images,
  Landing,
  Layout,
  MicroInteractions,
  Typography,
  UIElements,
} from './Screens';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Landing />} />
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
