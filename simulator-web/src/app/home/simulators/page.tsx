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
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

const SimulatorsPage = (): JSX.Element => {
  const label = 'Submit';

  const { push } = useRouter();
  const pathname = usePathname();

  const [simulatorId, setSimulatorId] = useState<string>('');
  const simulatorList = getSimulators();

  const handleSimulatorChange = (event: any) => {
    setSimulatorId(event.target.value);
  };

  const handleSimulatorSubmit = (event: any) => {
    event.preventDefault();
    push(`${pathname}/${simulatorId}`);
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
              defaultValue=""
              value={simulatorId}
              onChange={handleSimulatorChange}
            >
              {simulatorList.map((simulator: Simulator) => {
                return (
                  <MenuItem key={simulator.id} value={simulator.id}>
                    {simulator.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={8}></Grid>
        <Grid item xs={4} textAlign={'end'}>
          <Button variant="contained" type="submit">
            {label}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SimulatorsPage;
