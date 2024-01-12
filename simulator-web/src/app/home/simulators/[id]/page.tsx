import { Typography } from '@mui/material';

// this is not yet rendering...

const SimulatorDetailsPage = ({
  params,
}: {
  params: { id: number };
}): JSX.Element => {
  return (
    <Typography variant="h6" display="block">
      Simulator Details Page for Simulator id: {params.id}
    </Typography>
  );
};

export default SimulatorDetailsPage;
