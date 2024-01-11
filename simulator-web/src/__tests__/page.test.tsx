import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Page from '../app/page';

describe('Root Page', () => {
  it('renders a button for login', () => {
    render(<Page />);

    const heading = screen.getByRole('button', { name: 'Login' });

    expect(heading).toBeInTheDocument();
  });
});
