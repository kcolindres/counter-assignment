import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
});

test('renders counter message', () => {
  const counterElement = screen.getByText(/counter/i);
  expect(counterElement).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const countElement = screen.getByText('0');
  expect(countElement).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  const incrementButton = screen.getByText('+');
  const countElement = screen.getByText('0');

  fireEvent.click(incrementButton);
  expect(countElement.textContent).toBe('1');
});

test('clicking - decrements the count', () => {
  const decrementButton = screen.getByText('-');
  const countElement = screen.getByText('0');

  fireEvent.click(decrementButton);
  expect(countElement.textContent).toBe('-1');
});
