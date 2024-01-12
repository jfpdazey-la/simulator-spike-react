// this will need to be added to drive this to client-side
// 'use client';

import { getSimulators } from '@/app/lib/services/simulators/simulatorService';
import { Simulator } from '@/app/lib/services/simulators/simulatorTypes';
import Select from '@/app/wrapperComponents/select';
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Typography,
} from '@mui/material';

const SimulatorsPage = async (): Promise<JSX.Element> => {
  const simulatorList = await getSimulators();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5" display="block">
          Simulators Page
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel id="simulator-select-label">Simulator:</InputLabel>
          <Select
            labelId="simulator-select-label"
            id="simulator-select"
            label="Simulator:"
          >
            {simulatorList.map((simulator: Simulator) => {
              return <MenuItem value={simulator.id}>{simulator.name}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default SimulatorsPage;
