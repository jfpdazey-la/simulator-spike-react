import { getSimulators } from '@/app/lib/services/simulators/simulatorService';
import * as SWR from 'swr';

jest.mock('swr', () => {
  return {
    __esModule: true,
    ...jest.requireActual('swr'),
  };
});

describe('Simulator Service', () => {
  const defaultSWRExportHandle = 'default';
  var mockSWR: jest.SpyInstance;

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

  beforeEach(() => {
    mockSWR = jest.spyOn(SWR, defaultSWRExportHandle);
    mockSWR.mockReturnValue({ data: [] });
  });

  it('returns a list of simulators', async () => {
    mockSWR.mockReturnValueOnce({ data: expectedSimulators });
    const simulators = getSimulators();

    expect(simulators).toEqual(expectedSimulators);
  });
});
