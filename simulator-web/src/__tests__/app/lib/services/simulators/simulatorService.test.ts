import { fetcher } from '@/app/lib/services/fetcher';
import { Simulator } from '@/app/lib/services/simulators/ISimulatorTypes';
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

  const expectedSimulators: Simulator[] = [
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

  it('returns a list of simulators from SWR fetch', async () => {
    mockSWR.mockReturnValueOnce({ data: expectedSimulators });
    const simulators = getSimulators();

    expect(simulators).toEqual(expectedSimulators);
    expect(mockSWR).toHaveBeenCalledWith(
      'http://localhost:3001/simulators',
      fetcher,
      expect.anything(),
    );
  });

  it('disables SWR revalidateOnFocus', async () => {
    getSimulators();

    expect(mockSWR).toHaveBeenCalledWith(expect.anything(), expect.anything(), {
      revalidateOnFocus: false,
    });
  });

  it('returns an empty list of simulators while SWR is loading', async () => {
    mockSWR.mockReturnValueOnce({ data: null, isLoading: true });
    const simulators = getSimulators();

    expect(simulators).toEqual([]);
  });

  it('returns an empty list of simulators when SWR returns an error', async () => {
    mockSWR.mockReturnValueOnce({ data: null, error: new Error() });
    const simulators = getSimulators();

    expect(simulators).toEqual([]);
  });
});
