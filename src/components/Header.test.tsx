import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders India Digital Vision header with correct styles', () => {
  render(<Header />);

  // Debugging the rendered output for inspection
  screen.debug();

  const headerText = screen.getAllByText((_, element) =>
    element?.textContent === 'India Digital Vision'
  )[0]; // Pick the first match

  expect(headerText).toBeInTheDocument();

  const indiaText = screen.getByText('India');
  expect(indiaText).toHaveClass('text-theme-orange');
});
