'use client';

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
            Simulator {params.id}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            manufacturer?
          </Typography>
          <Typography variant="body2">
            more details here
            <br />
            and more here
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleBack}>
            Back to Simulator List
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default SimulatorDetailsPage;
