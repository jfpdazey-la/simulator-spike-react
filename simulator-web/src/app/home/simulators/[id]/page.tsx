'use client';

import { getSimulatorDetails } from '@/app/lib/services/simulators/simulatorService';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/navigation';

const SimulatorDetailsPage = ({
  params,
}: {
  params: { id: number };
}): JSX.Element => {
  const { back } = useRouter();

  const simulatorDetails = getSimulatorDetails(params.id);

  const handleBack = (event: any) => {
    event.preventDefault();
    back();
  };

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Simulator Details
          </Typography>
          <Typography variant="h5" component="div">
            {simulatorDetails?.manufacturer} {simulatorDetails?.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Family: {simulatorDetails?.family}
          </Typography>
          <Typography variant="body2" component="div">
            Passengers: {simulatorDetails?.passengers}
          </Typography>
          <Typography variant="body2" component="div">
            Active: {simulatorDetails?.active ? 'Yes' : 'No'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleBack}>
            Back to Simulator List
          </Button>
          {simulatorDetails && (
            <Button
              size="small"
              href={simulatorDetails.website}
              target="_blank"
            >
              Visit Website
            </Button>
          )}
        </CardActions>
      </Card>
    </Box>
  );
};

export default SimulatorDetailsPage;
