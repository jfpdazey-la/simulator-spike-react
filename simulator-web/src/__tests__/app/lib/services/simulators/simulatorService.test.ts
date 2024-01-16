import { fetcher } from '@/app/lib/services/fetcher';
import {
  Simulator,
  SimulatorDetails,
} from '@/app/lib/services/simulators/ISimulatorTypes';
import {
  getSimulatorDetails,
  getSimulators,
} from '@/app/lib/services/simulators/simulatorService';
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

  beforeEach(() => {
    mockSWR = jest.spyOn(SWR, defaultSWRExportHandle);
  });

  describe('Simulator List', () => {
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

      expect(mockSWR).toHaveBeenCalledWith(
        expect.anything(),
        expect.anything(),
        {
          revalidateOnFocus: false,
        },
      );
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

  describe('Simulator Details', () => {
    const expectedSimulatorDetails: SimulatorDetails = {
      id: 3,
      name: 'Simulator 3',
      family: 'we are',
      manufacturer: 'Sasquatch Air',
      website: 'https://example.com/sasquatch',
      passengers: 3,
      active: false,
    };
    beforeEach(() => {
      mockSWR.mockReturnValue({ data: {} });
    });

    it('returns simulator details from SWR fetch', async () => {
      mockSWR.mockReturnValueOnce({ data: expectedSimulatorDetails });
      const simulator = getSimulatorDetails(42);

      expect(simulator).toEqual(expectedSimulatorDetails);
      expect(mockSWR).toHaveBeenCalledWith(
        'http://localhost:3001/simulators/42',
        fetcher,
        expect.anything(),
      );
    });

    it('disables SWR revalidateOnFocus', async () => {
      getSimulatorDetails(42);

      expect(mockSWR).toHaveBeenCalledWith(
        expect.anything(),
        expect.anything(),
        {
          revalidateOnFocus: false,
        },
      );
    });

    it('returns null simulator details while SWR is loading', async () => {
      mockSWR.mockReturnValueOnce({ data: null, isLoading: true });
      const simulator = getSimulatorDetails(42);

      expect(simulator).toBeNull();
    });

    it('returns null simulator details when SWR returns an error', async () => {
      mockSWR.mockReturnValueOnce({ data: null, error: new Error() });
      const simulator = getSimulatorDetails(42);

      expect(simulator).toBeNull();
    });
  });
});
