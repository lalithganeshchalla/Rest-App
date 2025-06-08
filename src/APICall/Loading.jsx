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
          padding={3}
          alignItems="center" 
          height="100vh">
          
        <h1 style={{fontSize:'24px'}}>Click on Button View the API</h1>
      <Button variant="contained" color="success" onClick={onSubmit1} sx={{mb:3}}>
        FETCH  
      </Button>
      <Button variant="contained" color="success" onClick={onSubmit2} sx={{mb:3}}>
        AXIOS
      </Button>
      <Button variant="contained" color="success" onClick={onSubmit3} sx={{mb:3}}>
        useReducer
      </Button>
      <Button variant="contained" color="success" onClick={onSubmit4} sx={{mb:3}}>
        Portfolio
      </Button>
    </Stack>
  );
}
