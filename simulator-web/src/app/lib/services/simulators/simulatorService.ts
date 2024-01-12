const getSimulators = async (): Promise<String[]> => {
  return Promise.resolve(['Simulator 1', 'Simulator 2', 'Simulator 3']);
};

export { getSimulators };
