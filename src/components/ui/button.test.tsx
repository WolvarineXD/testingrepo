import { render, screen } from '@testing-library/react';
import { Button } from './button';

test('renders button with correct text', () => {
  // Render the Button component with text "Click Me"
  render(<Button>Click Me</Button>);

  // Find the button element by its text
  const buttonElement = screen.getByText('Click Me');

  // Assert that the button is in the document
  expect(buttonElement).toBeInTheDocument();

  // Assert that the button is rendered as a button HTML element
  expect(buttonElement.tagName).toBe('BUTTON');
});
