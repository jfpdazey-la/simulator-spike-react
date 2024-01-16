import { SimulatorDetails } from '@/app/lib/services/simulators/ISimulatorTypes';
import * as SimulatorService from '@/app/lib/services/simulators/simulatorService';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SimulatorDetailsPage from '../../../../../app/home/simulators/[id]/page';

const expectedSimulatorDetails = {
  id: 42,
  name: '737-900',
  family: '737',
  manufacturer: 'Boeing',
  website: 'https://example.com',
  passengers: 215,
  active: true,
};

jest.mock('../../../../../app/lib/services/simulators/simulatorService', () => {
  return {
    __esModule: true,
    ...jest.requireActual(
      '../../../../../app/lib/services/simulators/simulatorService',
    ),
  };
});

const routerBack = jest.fn();
jest.mock('next/navigation', () => {
  return {
    __esModule: true,
    ...jest.requireActual('next/navigation'),
    useRouter: jest.fn(() => ({
      back: routerBack,
    })),
    usePathname: jest.fn(),
  };
});

describe('Simulator Details Page', () => {
  var mockSimulatorService: jest.SpyInstance;

  beforeEach(() => {
    mockSimulatorService = jest.spyOn(SimulatorService, 'getSimulatorDetails');
    mockSimulatorService.mockReturnValue({});
  });

  it('displays a title', async () => {
    render(<SimulatorDetailsPage params={{ id: 42 }} />);

    expect(screen.getByText('Simulator Details')).toBeInTheDocument();
  });

  it('allows the user to return to Simulators', async () => {
    const user = userEvent.setup();
    render(<SimulatorDetailsPage params={{ id: 42 }} />);

    const backButton = screen.getByRole('button', {
      name: 'Back to Simulator List',
    });
    await user.click(backButton);

    expect(routerBack).toHaveBeenCalled();
  });

  it('displays simulator details', async () => {
    mockSimulatorService.mockReturnValue(expectedSimulatorDetails);

    render(<SimulatorDetailsPage params={{ id: 42 }} />);

    expect(screen.getByText('Boeing 737-900')).toBeInTheDocument();
    expect(screen.getByText('Family: 737')).toBeInTheDocument();
    expect(screen.getByText('Passengers: 215')).toBeInTheDocument();
    expect(screen.getByText('Active: Yes')).toBeInTheDocument();
  });

  it('handles inactive simulators', async () => {
    mockSimulatorService.mockReturnValue({
      ...expectedSimulatorDetails,
      active: false,
    } as SimulatorDetails);

    render(<SimulatorDetailsPage params={{ id: 42 }} />);

    expect(screen.getByText('Active: No')).toBeInTheDocument();
  });

  // issues with this test - need to investigate
  //   it('displays a link to the simulator website', async () => {
  //     mockSimulatorService.mockReturnValue(expectedSimulatorDetails);

  //     const user = userEvent.setup();
  //     render(<SimulatorDetailsPage params={{ simulatorId: 42 }} />);

  //     const backButton = screen.getByRole('link', {
  //       name: 'Visit Website',
  //     });
  //     await user.click(backButton);

  //     expect(window.location).toEqual('https://example.com');
  //   });
});
