import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HomeLayout from '../../../app/home/layout';

import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

describe('Home Layout', () => {
  it('displays a toolbar', () => {
    render(<HomeLayout children={exampleNode} />);

    const heading = screen.getByRole('heading', { name: 'Spike Application' });

    expect(heading).toBeInTheDocument();
  });

  it('displays the provided child page by default', async () => {
    render(<HomeLayout children={exampleNode} />);

    expect(screen.getByText('Hello From Home Layout')).toBeInTheDocument();
  });

  it('displays a link to Simulators', async () => {
    const user = userEvent.setup();
    render(<HomeLayout children={exampleNode} />, {
      wrapper: MemoryRouterProvider,
    });

    const button = screen.getByRole('link', { name: 'Simulators' });

    await user.click(button);

    expect(mockRouter.asPath).toBe('/home/simulators');
  });

  it('displays a link to Search', async () => {
    const user = userEvent.setup();
    render(<HomeLayout children={exampleNode} />, {
      wrapper: MemoryRouterProvider,
    });

    const button = screen.getByRole('link', { name: 'Search' });

    await user.click(button);

    expect(mockRouter.asPath).toBe('/home/search');
  });

  it('displays a link to Settings', async () => {
    const user = userEvent.setup();
    render(<HomeLayout children={exampleNode} />, {
      wrapper: MemoryRouterProvider,
    });

    const button = screen.getByRole('link', { name: 'Settings' });

    await user.click(button);

    expect(mockRouter.asPath).toBe('/home/settings');
  });

  it('displays a link to Logout', async () => {
    const user = userEvent.setup();
    render(<HomeLayout children={exampleNode} />, {
      wrapper: MemoryRouterProvider,
    });

    const button = screen.getByRole('link', { name: 'Logout' });

    await user.click(button);

    expect(mockRouter.asPath).toBe('/');
  });
});

const exampleNode: React.ReactNode = <>Hello From Home Layout</>;
