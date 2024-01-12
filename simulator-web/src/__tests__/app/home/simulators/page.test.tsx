import * as SimulatorService from '@/app/lib/services/simulators/simulatorService';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
    const user = userEvent.setup();

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
    mockSimulatorService.mockResolvedValueOnce(expectedSimulators);

    render(await SimulatorsPage());

    const simulatorSelect = screen.getByRole('combobox');
    expect(simulatorSelect).toBeInTheDocument();
    await user.click(simulatorSelect);

    screen.debug();

    const options = screen.getAllByRole('option');
    expect(options.length).toBe(3);
    expect(options[0]).toHaveTextContent('Simulator 1');
    expect(options[1]).toHaveTextContent('Simulator 2');
    expect(options[2]).toHaveTextContent('Simulator 3');
  });
});
