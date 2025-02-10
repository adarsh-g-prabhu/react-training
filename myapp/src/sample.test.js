import { render, screen, fireEvent } from '@testing-library/react';
import Sample from './sample';
import React from 'react';


test('displays message when button is clicked', () => {

  render(<Sample/>);

  expect(screen.queryByText(/Hello World!/i)).not.toBeInTheDocument();
  fireEvent.click(screen.getByText(/Click me/i));
  expect(screen.getByText(/Hello World!/i)).toBeInTheDocument();
  
});