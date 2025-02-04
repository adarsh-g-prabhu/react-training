import { render, screen, fireEvent } from '@testing-library/react';
import Button from './sample';

describe('Button component', () => {
  test('renders with "Click Me" text initially', () => {
    render(<Button />);
    const buttonElement = screen.getByRole('button');  // Find the button by role
    expect(buttonElement).toHaveTextContent('Click Me');  // Assert the button text
  });

  test('changes text to "Clicked!" when clicked', () => {
    render(<Button />);
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);  // Simulate a click event
    expect(buttonElement).toHaveTextContent('Clicked!');  // Assert the text after click
  });
});
