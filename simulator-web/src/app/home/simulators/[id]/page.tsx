'use client';

import { Grid, Typography } from '@mui/material';
import Link from 'next/link';
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
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="body2" display="block">
          <Link href="/" onClick={handleBack}>
            &lt; Back
          </Link>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" display="block">
          Simulator Details Page for Simulator id: {params.id}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SimulatorDetailsPage;
