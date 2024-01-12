import { render, screen } from '@testing-library/react';
import SimulatorsPage from '../../../../app/home/simulators/page';

describe('Root Page', () => {
  it('displays a title', () => {
    render(<SimulatorsPage />);

    const heading = screen.getByRole('heading', { name: 'Simulators Page' });

    expect(heading).toBeInTheDocument();
  });

  // it('navigates to the home page upon clicking the login button', async () => {
  //   const user = userEvent.setup();
  //   render(<SimulatorsPage />, { wrapper: MemoryRouterProvider });

  //   const button = screen.getByRole('link', { name: 'Login' });

  //   await user.click(button);

  //   expect(mockRouter.asPath).toBe('/home');
  // });
});
