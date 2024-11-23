import { render, screen } from '@testing-library/react';
import App from './App';

test('renders StockSense text', () => {
  render(<App />);
  const linkElement = screen.getByText(/StockSense/i);
  expect(linkElement).toBeInTheDocument();
});
