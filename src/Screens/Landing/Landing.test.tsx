import { render, screen } from '@testing-library/react';

import { Landing } from './Landing';
import landingJson from './landing.json';

test('Landing', () => {
  render(<Landing />);
  expect(screen.getByText(landingJson.title)).toBeInTheDocument();
});
