import useSWR from 'swr';
import { fetcher } from '../fetcher';
import { Simulator } from './ISimulatorTypes';

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

export { getSimulators };
