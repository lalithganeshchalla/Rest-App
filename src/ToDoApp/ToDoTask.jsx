import React , {useState} from 'react'
import './ToDoTask.css'
import { v4 as uuidv4 } from 'uuid';
import { Button } from '@mui/material';
const ToDoTask = () => {
    const [task , setTask] = useState([]);
    const [value , setValue] = useState('');

     const addTask = ()=>{
        if(value.trim() !== '') { // Check if the input is not empty or contains only whitespace
            const newTask = {
                id: uuidv4(),
                text: value,
            }
        setTask([...task,newTask]);
    setValue('');
    }else if(value.trim() === ''){
        alert("Please enter a task");
    };
}
const deleteTask = (id) => {
  setTask(task.filter((t) => t.id !== id));
};
  return (
    <div className='todo-container'>
      <h1>Todo Task Component</h1>
      <input type="text" placeholder='Enter Task' onChange={(e)=>setValue(e.target.value)} onKeyDown={(e) => {
        if (e.key === 'Enter') {
            addTask();
        }
      } } required />
      <Button variant="contained" onClick={addTask}>Add Task</Button>
      <ul>
        {task.map((task)=>(
            <li key={task.id}>{task.text}
            <Button onClick={()=>deleteTask(task.id)} style={{marginLeft: '20px'}}>❌</Button>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default ToDoTask
