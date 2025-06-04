import React, {useState} from 'react';

const TextInput = () => {

const [text, setText] = useState({user : '', email : '', id : {} });
const [submit, setSubmit] = useState(false);

const handleSubmit = (g) => {
g.preventDefault();
setSubmit(true);
}
return(

<div style={{padding: '100px'}}>
    <label>UserName: </label>
    <input type='text' value={text.user} placeholder='Enter the UserName' onChange={(e) => setText({...text, user: e.target.value})} /><br /><br />
    <label>Email: </label>
    <input type='email' color='' value={text.email} placeholder='Enter the Email' onChange={(e) => setText({...text, email: e.target.value})} /><br /><br />
    <label>ID: </label>
    <input type='number' color='' value={text.id} placeholder='Enter the ID' onChange={(e) => setText({...text, id: e.target.value})} />
    <button onClick={handleSubmit}>Submit</button>

    {submit && ( 
      <div >
    <p>You typed value-1:<u> {text.user}</u></p>
    <p>You typed value-2:<u> {text.email}</u></p>
    <p>You typed value-3:<u>{text.id}</u></p>
</div>
)} </div>

)

}

export default TextInput;
