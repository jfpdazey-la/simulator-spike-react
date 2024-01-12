import * as SimulatorService from '@/app/lib/services/simulators/simulatorService';
import { render, screen, waitFor } from '@testing-library/react';
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
  it('displays a title', async () => {
    render(await SimulatorsPage());

    const heading = screen.getByRole('heading', { name: 'Simulators Page' });

    expect(heading).toBeInTheDocument();
  });

  it('displays a list of simulators', async () => {
    const simulators = ['Simulator 1', 'Simulator 2', 'Simulator 3'];
    const mockSimulatorService = jest.spyOn(SimulatorService, 'getSimulators');
    mockSimulatorService.mockResolvedValue(simulators);

    render(await SimulatorsPage());

    await waitFor(() =>
      expect(screen.getByText('Simulator 1')).toBeInTheDocument(),
    );
  });
});
