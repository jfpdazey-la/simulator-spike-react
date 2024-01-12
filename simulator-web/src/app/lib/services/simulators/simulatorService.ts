const getSimulators = async (): Promise<string[]> => {
  const response = await fetch('http://localhost:3001/simulators', {
    cache: 'no-store',
  });
  return response.json();
};

export { getSimulators };
