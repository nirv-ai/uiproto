import { render, screen } from '@testing-library/react';

import { Landing } from './Landing';
import text from './text.json';

test('Landing', () => {
  render(<Landing />);
  expect(screen.getByText(text.title)).toBeInTheDocument();
});
