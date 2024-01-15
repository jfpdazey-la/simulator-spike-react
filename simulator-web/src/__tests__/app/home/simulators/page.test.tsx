import * as SimulatorService from '@/app/lib/services/simulators/simulatorService';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SimulatorsPage from '../../../../app/home/simulators/page';

import * as Navigation from 'next/navigation';

jest.mock('../../../../app/lib/services/simulators/simulatorService', () => {
  return {
    __esModule: true,
    ...jest.requireActual(
      '../../../../app/lib/services/simulators/simulatorService',
    ),
  };
});

const routerPush = jest.fn();
jest.mock('next/navigation', () => {
  return {
    __esModule: true,
    ...jest.requireActual('next/navigation'),
    useRouter: jest.fn(() => ({
      push: routerPush,
    })),
    useSearchParams: jest.fn(() => ({
      get: jest.fn(),
    })),
    usePathname: jest.fn(),
  };
});

const expectedSimulators = [
  {
    id: 1,
    name: 'Simulator 1',
  },
  {
    id: 2,
    name: 'Simulator 2',
  },
  { id: 3, name: 'Simulator 3' },
];

describe('Root Page', () => {
  var mockSimulatorService: jest.SpyInstance;

  beforeEach(() => {
    mockSimulatorService = jest.spyOn(SimulatorService, 'getSimulators');
    mockSimulatorService.mockReturnValue([]);
  });

  it('displays a title', async () => {
    render(<SimulatorsPage />);

    const heading = screen.getByRole('heading', { name: 'Simulators Page' });

    expect(heading).toBeInTheDocument();
  });

  it('displays a list of simulators', async () => {
    mockSimulatorService.mockReturnValue(expectedSimulators);

    const user = userEvent.setup();
    render(<SimulatorsPage />);

    const simulatorSelect = screen.getByRole('combobox');
    expect(simulatorSelect).toBeInTheDocument();
    await user.click(simulatorSelect);

    const options = screen.getAllByRole('option');
    expect(options.length).toBe(3);
    expect(options[0]).toHaveTextContent('Simulator 1');
    expect(options[1]).toHaveTextContent('Simulator 2');
    expect(options[2]).toHaveTextContent('Simulator 3');
  });

  it('allows user to select a simulator', async () => {
    const mockUsePathname = jest.spyOn(Navigation, 'usePathname');
    mockUsePathname.mockReturnValue('/home/simulators');
    mockSimulatorService.mockReturnValue(expectedSimulators);

    const user = userEvent.setup();
    render(<SimulatorsPage />);

    const simulatorSelect = screen.getByRole('combobox');
    await user.click(simulatorSelect);

    const option = await screen.findByRole('option', { name: 'Simulator 2' });
    await user.click(option);

    const submitButton = screen.getByRole('button');
    await user.click(submitButton);

    expect(routerPush).toHaveBeenCalledWith('/home/simulators/2');
  });
});
