import { getSimulators } from '@/app/lib/services/simulators/simulatorService';

describe('Simulator Service', () => {
  it('returns a list of simulators', async () => {
    const simulators = await getSimulators();

    expect(simulators).toEqual(['Simulator 1', 'Simulator 2', 'Simulator 3']);
  });
});
