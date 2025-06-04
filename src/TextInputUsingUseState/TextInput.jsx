import React, {useState} from 'react';

const TextInput = () => {

const [text, setText] = useState({user : '', email : ''});
const [submit, setSubmit] = useState(false);

const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
}
return(

    <div style={{padding: '100px'}}>
        <form onSubmit={handleSubmit}>
        <label>UserName: </label>
        <input type='text' value={text.user} placeholder='Enter the UserName' onChange={(e) => setText({...text, user: e.target.value})} /><br /><br />
        <label>Email: </label>
        <input type='text' color='' value={text.email} placeholder='Enter the Email' onChange={(e) => setText({...text, email: e.target.value})} />
        <button type='submit' >Submit</button>
        </form>
       {submit && (
        <div style={{ marginTop: '20px' }}>
          <p>You typed value-1: <u>{text.user}</u></p>
          <p>You typed value-2: <u>{text.email}</u></p>
        </div>
      )}
    </div>

)

}

export default TextInput;