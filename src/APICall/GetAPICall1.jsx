import React , {useEffect , useState} from 'react'
import axios from 'axios'
import loadingGif from '../assets/loading.gif';

const GetAPICall1 = () => {

  const [data , setData] = useState([]);
  const [loading , setLoading] = useState(true);
  const [error , setError] = useState(null);
  
  useEffect(() => {
    const geturl = 'https://api.restful-api.dev/objects';
    axios.get(geturl)
    .then(response => {
      setData(response.data);
      setLoading(false);
      console.log('Successfully fetching data:',response.data);
    })
   
    .catch(error => {
        setError(error);
        setLoading(false);
      console.error('Error fetching data:', error);
    })
  }, [])  

  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
      <h1>Axios API Get Call Example</h1>
      {loading && (
        <div>
            <h2>Loading...</h2>
          <img src={loadingGif} alt="Loading..." />
        </div>
      )}
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <strong>ID:</strong> {item.id} <br />
            <strong>Name:</strong> {item.name}
          </li>
        ))}
        </ul>
    </div>
  )
}

export default GetAPICall1