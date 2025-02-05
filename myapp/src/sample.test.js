// Button.test.js
import { render, fireEvent, screen } from '@testing-library/react';
import Button from './Button';
import React from 'react';

describe('Button Component', () => {
  
  test('renders the button with initial label "Click Me"', () => {
    render(<Button />);
    
    // Get the button element
    const button = screen.getByRole('button', { name: /click me/i });
    
    // Check that the button is initially displayed with the label "Click Me"
    expect(button).toBeInTheDocument();
  });

  test('clicking the button changes its label to "Clicked!"', () => {
    render(<Button />);
    
    // Get the button element
    const button = screen.getByRole('button', { name: /click me/i });
    
    // Click the button and verify its new label
    fireEvent.click(button);
    expect(button).toHaveTextContent('Clicked!');
  });

  test('h1 text "Test Button" is displayed correctly', () => {
    render(<Button />);
    
    // Get the h1 element and check if it is displayed correctly
    const h1 = screen.getByRole('heading', { name: /test button/i });
    expect(h1).toBeInTheDocument();
  });

});
