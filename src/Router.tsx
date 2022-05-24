import { HashRouter, Routes, Route } from 'react-router-dom';

import {
  Animation,
  App,
  Images,
  Landing,
  Layout,
  MicroInteractions,
  Typography,
  UIElements,
  Video,
} from './Screens';

export const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Landing />} />
          <Route path="animation" element={<Animation />} />
          <Route path="images" element={<Images />} />
          <Route path="layout" element={<Layout />} />
          <Route path="micro-interactions" element={<MicroInteractions />} />
          <Route path="typography" element={<Typography />} />
          <Route path="ui-elements" element={<UIElements />} />
          <Route path="video" element={<Video />} />
          <Route path="*" element={<p>There's nothing here!</p>} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
