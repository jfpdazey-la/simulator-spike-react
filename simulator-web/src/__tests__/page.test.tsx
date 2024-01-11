import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Page from '../app/page';

import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

describe('Root Page', () => {
  it('displays some boilerplate text', () => {
    render(<Page />);

    expect(
      screen.getByText('Click below to log into the demo'),
    ).toBeInTheDocument();
  });

  it('navigates to the home page upon clicking the login button', async () => {
    const user = userEvent.setup();
    render(<Page />, { wrapper: MemoryRouterProvider });

    const button = screen.getByRole('link', { name: 'Login' });

    await user.click(button);

    expect(mockRouter.asPath).toBe('/home');
  });
});
