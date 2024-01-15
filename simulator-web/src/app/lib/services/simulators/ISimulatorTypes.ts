interface Simulator {
  id: number;
  name: string;
}

interface SimulatorDetails extends Simulator {
  line: string;
  manufacturer: string;
  website: string;
  passengers: number;
  active: boolean;
}

export type { Simulator, SimulatorDetails };
