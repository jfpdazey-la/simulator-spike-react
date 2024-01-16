interface Simulator {
  id: number;
  name: string;
}

interface SimulatorDetails extends Simulator {
  family: string;
  manufacturer: string;
  website: string;
  passengers: number;
  active: boolean;
}

export type { Simulator, SimulatorDetails };
