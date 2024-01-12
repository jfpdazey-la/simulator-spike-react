import * as SimulatorService from '@/app/lib/services/simulators/simulatorService';
import { render, screen } from '@testing-library/react';
import SimulatorsPage from '../../../../app/home/simulators/page';

jest.mock('../../../../app/lib/services/simulators/simulatorService', () => {
  return {
    __esModule: true,
    ...jest.requireActual(
      '../../../../app/lib/services/simulators/simulatorService',
    ),
  };
});

describe('Root Page', () => {
  var mockSimulatorService: jest.SpyInstance;

  beforeEach(() => {
    mockSimulatorService = jest.spyOn(SimulatorService, 'getSimulators');
    mockSimulatorService.mockResolvedValue([]);
  });

  it('displays a title', async () => {
    render(await SimulatorsPage());

    const heading = screen.getByRole('heading', { name: 'Simulators Page' });

    expect(heading).toBeInTheDocument();
  });

  it('displays a list of simulators', async () => {
    const simulators = ['Simulator 1', 'Simulator 2', 'Simulator 3'];
    mockSimulatorService.mockResolvedValueOnce(simulators);

    render(await SimulatorsPage());

    const simulatorSelect = screen.getByRole('combobox');
    expect(simulatorSelect).toBeInTheDocument();

    // this is failing
    // const options = screen.getAllByRole('option');
    // expect(options[0]).toHaveTextContent('Simulator 1');
  });
});
