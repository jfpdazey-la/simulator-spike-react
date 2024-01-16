import useSWR from 'swr';
import { fetcher } from '../fetcher';
import { Simulator, SimulatorDetails } from './ISimulatorTypes';

const baseSimulatorRoute = 'http://localhost:3001/simulators';
const defaultSWROptions = { revalidateOnFocus: false };

const getSimulators = (): Simulator[] => {
  const {
    data: simulators,
    error,
    isLoading,
  } = useSWR(baseSimulatorRoute, fetcher, defaultSWROptions);

  if (isLoading || error) return [];

  return simulators;
};

const getSimulatorDetails = (id: number): SimulatorDetails | null => {
  const {
    data: simulator,
    error,
    isLoading,
  } = useSWR(`${baseSimulatorRoute}/${id}`, fetcher, defaultSWROptions);

  if (isLoading || error) return null;

  return simulator;
};

export { getSimulatorDetails, getSimulators };
