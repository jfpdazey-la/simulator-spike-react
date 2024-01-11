import { Button, Typography } from '@mui/material';
import Link from 'next/link';
import styles from './page.module.css';

const label = 'Login';

export default function Home() {
  return (
    <div className={styles.container}>
      <Typography variant="body1" display="block" gutterBottom>
        Click below to log into the demo
      </Typography>
      <Button variant="contained" component={Link} href="/home">
        {label}
      </Button>
    </div>
  );
}
