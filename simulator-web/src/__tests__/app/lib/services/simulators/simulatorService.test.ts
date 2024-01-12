import { getSimulators } from '@/app/lib/services/simulators/simulatorService';

describe('Simulator Service', () => {
  const globalFetch = global.fetch;
  const expectedSimulators = ['Simulator A', 'Simulator B', 'Simulator C'];

  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(expectedSimulators),
      }),
    ) as jest.Mock;
  });

  afterEach(() => {
    global.fetch = globalFetch;
  });

  it('returns a list of simulators', async () => {
    const simulators = await getSimulators();

    expect(simulators).toEqual(expectedSimulators);
  });
});
