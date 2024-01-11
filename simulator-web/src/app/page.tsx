import styles from './page.module.css';
import { Button, Typography } from '@mui/material';

const label = 'Login';

export default function Home() {
  return (
    <div className={styles.container}>
      <Typography variant="body1" display="block" gutterBottom>
        Click below to log into the demo
      </Typography>
      <Button variant="contained">{label}</Button>
    </div>
  );
}
