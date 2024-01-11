import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Page from '../app/page';

describe('Root Page', () => {
  it('displays some boilerplate text', () => {
    render(<Page />);

    expect(
      screen.getByText('Click below to log into the demo'),
    ).toBeInTheDocument();
  });

  it('renders a button for login', () => {
    render(<Page />);

    const button = screen.getByRole('button', { name: 'Login' });

    expect(button).toBeInTheDocument();
  });
});
