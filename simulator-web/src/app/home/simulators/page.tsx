'use client';

import { getSimulators } from '@/app/lib/services/simulators/simulatorService';
import { Simulator } from '@/app/lib/services/simulators/simulatorTypes';
import Select from '@/app/wrapperComponents/select';
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Typography,
} from '@mui/material';

const SimulatorsPage = (): JSX.Element => {
  const simulatorList = getSimulators();
  const label = 'Submit';

  const handleSimulatorSubmit = (event: any) => {
    event.preventDefault();
    alert('Simulator selected');
  };

  return (
    <form onSubmit={handleSimulatorSubmit}>
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
              defaultValue={''}
            >
              {simulatorList.map((simulator: Simulator) => {
                return (
                  <MenuItem value={simulator.id}>{simulator.name}</MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={8}></Grid>
        <Grid item xs={4} textAlign={'end'}>
          <Button variant="contained">{label}</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SimulatorsPage;
