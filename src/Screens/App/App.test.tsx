import { render, screen } from '@testing-library/react';

import { App } from './App';
import appJson from './App.json';

test('App', () => {
  render(<App />);
  expect(screen.getByText(appJson.title)).toBeInTheDocument();
});
