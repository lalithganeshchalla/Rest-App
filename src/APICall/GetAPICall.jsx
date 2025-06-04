import React, { useEffect , useState } from 'react'
import loadingGif from '../assets/loading.gif';
import {Card} from '@mui/material';

const GetAPICall = () => {

const [data , setData] = useState([]);
const [loading , setLoading] = useState(true);
const [error , setError] = useState(null);

    useEffect(() => {
    fetch('https://api.restful-api.dev/objects')
    .then(response => {
        if(!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        setData(data);
        setLoading(false);
        console.log("Data fetch is successfully",data);
    })
    .catch(error => {
        setError(error);
        setLoading(false);
        console.error('Error fetching data:', error);
    });
} , [])

  return (
    <div>
      <h1>Fetch API Get Call Example</h1>

      {loading && (
        <div>
            <h2>Loading...</h2>
          <img src={loadingGif} alt="Loading..." />
        </div>
      )}
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}

     
         <ul>
        {data.map(item => (
            <Card sx={{margin:2}}>
          <li key={item.id}>
            <strong>ID:</strong> {item.id} <br />
            <strong>Name:</strong> {item.name}
             {item.data ? (
                <div >
                  {Object.entries(item.data).map(([key, value]) => (
                    <div key={key}>
                      <strong>{key}:</strong> {value.toString()}
                    </div>
                  ))}
                </div>
              ) : (
                <em>No additional data</em>
              )}
          </li>
          </Card>
        ))}
      </ul>
     
    </div>
  )
}

export default GetAPICall