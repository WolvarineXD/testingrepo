import { render, screen } from '@testing-library/react';
import Button from './button';

test('renders button with correct text', () => {
  render(<Button>Click Me</Button>);
  expect(screen.getByText('Click Me')).toBeInTheDocument();
});
