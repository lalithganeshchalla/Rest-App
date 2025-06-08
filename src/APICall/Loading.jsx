import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function Loading() {
   const navigate = useNavigate();
    const onSubmit1 = () => {
        navigate('/fetchapi')
    }
    const onSubmit2 = () => {
        navigate('/axiosapi')
    }
    const onSubmit3 = () => {
        navigate('/users')
    }
     const onSubmit4 = () => {
        navigate('/home')
    }
  return (
    <Stack display="flex"
          flexDirection={{ xs: 'column', sm: 'row' }}
          justifyContent="space-around"
          alignItems="center" 
          height="100vh">
          
        <h1>Click on Button View the API</h1>
      <Button variant="contained" color="success" onClick={onSubmit1}>
        FETCH
      </Button>
      <Button variant="contained" color="success" onClick={onSubmit2}>
        AXIOS
      </Button>
      <Button variant="contained" color="success" onClick={onSubmit3}>
        useReducer
      </Button>
      <Button variant="contained" color="success" onClick={onSubmit4}>
        Portfolio
      </Button>
    </Stack>
  );
}
