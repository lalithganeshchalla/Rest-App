import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function Index() {
   const navigate = useNavigate();
    const onSubmit = () => {
        navigate('/users')
    }
  return (
    <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" height="100vh">
        <h1>Click on Button View the User List</h1>
      <Button variant="contained" color="success" onClick={onSubmit}>
        OPEN
      </Button>
    </Stack>
  );
}
