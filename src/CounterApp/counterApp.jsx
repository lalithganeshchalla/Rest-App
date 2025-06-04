import React, {useState} from 'react'
import Button from '@mui/material/Button';
const CounterApp = () => {
    const [count , setCount] = useState(0);
    const styling = {
      padding:"10px",
    }
  return (
    <div style={{textAlign:"center"}}>
      <h1>This is Counter App</h1>
      <h4>The Value is Counter App : {count}</h4>
      <Button style={styling} variant="contained" color="success" onClick={()=>setCount(count+1)}>Increment</Button>
      <Button style={styling} variant="contained" color="primary" onClick={()=>setCount(0)}>Reset</Button>
      <Button style={styling} variant="contained" color="secondary" onClick={()=>count > 0 && setCount(count - 1)}>Decrement</Button>
      
      
    </div>
  )
}

export default CounterApp
