interface Simulator {
  id: number;
  name: string;
}

interface SimulatorDetails extends Simulator {}

export type { Simulator, SimulatorDetails };
