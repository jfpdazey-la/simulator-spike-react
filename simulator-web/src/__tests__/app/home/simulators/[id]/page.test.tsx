import * as SimulatorService from '@/app/lib/services/simulators/simulatorService';
import { render, screen } from '@testing-library/react';
//import userEvent from '@testing-library/user-event';
import SimulatorDetailsPage from '../../../../../app/home/simulators/[id]/page';

const expectedSimulatorDetails = {
  id: 1,
  name: 'Simulator 1',
  manufacturer: 'Boeing',
  website: 'https://example.com',
  passengers: 175,
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

jest.mock('next/navigation', () => {
  return {
    __esModule: true,
    ...jest.requireActual('next/navigation'),
    useRouter: jest.fn(() => ({
      back: jest.fn(),
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
});
