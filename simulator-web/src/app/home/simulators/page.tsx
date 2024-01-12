import { getSimulators } from '@/app/lib/services/simulators/simulatorService';
import { Typography } from '@mui/material';

const SimulatorsPage = async (): Promise<JSX.Element> => {
  const simulatorList = await getSimulators();

  return (
    <>
      <Typography variant="h5" display="block">
        Simulators Page
      </Typography>

      {simulatorList.map((simulator) => {
        return (
          <Typography variant="h6" display="block">
            {simulator}
          </Typography>
        );
      })}
    </>
  );
};

export default SimulatorsPage;
