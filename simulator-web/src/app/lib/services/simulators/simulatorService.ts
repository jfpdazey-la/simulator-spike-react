import useSWR from 'swr';
import { fetcher } from '../fetcher';
import { Simulator, SimulatorDetails } from './ISimulatorTypes';

const getSimulators = (): Simulator[] => {
  const {
    data: simulators,
    error,
    isLoading,
  } = useSWR('http://localhost:3001/simulators', fetcher, {
    revalidateOnFocus: false,
  });

  if (isLoading || error) return [];

  return simulators;
};

const getSimulatorDetails = (id: number): SimulatorDetails | null => {
  const {
    data: simulator,
    error,
    isLoading,
  } = useSWR(`http://localhost:3001/simulators/${id}`, fetcher, {
    revalidateOnFocus: false,
  });

  if (isLoading || error) return null;

  return simulator;
};

export { getSimulatorDetails, getSimulators };
