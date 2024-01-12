import { Simulator } from "./simulatorTypes";

const getSimulators = async (): Promise<Simulator[]> => {
  const response = await fetch('http://localhost:3001/simulators', {
    cache: 'no-store',
  });
  return response.json();
};

export { getSimulators };
