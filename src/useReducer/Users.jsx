import React , {useEffect, useReducer} from 'react'
import {Card} from '@mui/material'
import loadingGif from '../assets/loading.gif';

// action types

const FETCH_INIT = "FETCH_INIT"
const FETCH_SUCCESS = "FETCH_SUCCESS"
const FETCH_ERROR = "FETCH_ERROR"


const initialState = {
    loading: true,
    data : null,
    error : null
}

const userReduser = (state , action) => {
    switch(action.type){
        case FETCH_INIT:
            return{...state , loading: true, error:null};
            case FETCH_SUCCESS:
                return{...state , loading:false , data: action.payload};
                case FETCH_ERROR:
                    return{...state , loading:false, error : action.payload} 
                default:
                    return state;
                }

}

const Users = () => {
    const [state , dispatch] = useReducer(userReduser , initialState)

    const userHandler = async() => {
            try {
                dispatch({type:FETCH_INIT})
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const newData = await response.json()
            dispatch({type:FETCH_SUCCESS, payload:newData})
            } catch (error) {

                dispatch({type:FETCH_ERROR, payload:error})
                
            }
    }
    useEffect(() => {
        console.log(userHandler())
}, []);
  return (
    <div>
        <center>
        <h1>Welcome to React useReducer</h1>
        {state.loading && (
            <div>
                <h1>Processing...</h1>
            <img src={loadingGif} alt="Loading..."  />
            </div>
        )}
        </center>
        {state.data && (
            <div style={{padding:"10px"}}>
                {state.data.map((items) => {
                    return(
                    <Card key={items.id} style={{padding:"5px",margin:"10px"}}> 
                         <h5>{items.id}. {items.name}</h5>
                         <h5>username: {items.username}</h5>
                         <h5>email: {items.email}</h5>
                    </Card>
                    );
                })}
            </div>
        )}
     {state.error && <div>{alert(state.error)}</div> }
    </div>
  )
}

export default Users