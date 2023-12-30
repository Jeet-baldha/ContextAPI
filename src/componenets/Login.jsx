/* eslint-disable no-unused-vars */
import React,{useContext, useState} from 'react'
import UserContext from '../context/UserContext'


function Login() {

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username,password});
    }

  return (
    <div>
        <h2>login</h2>
        <input type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
            placeholder='usename' />
        <br />
        <input type="text" 
            value = {password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder='passwprd' />
        <br />
        <button onClick={handleSubmit} >submit</button>
    </div>
  )
}

export default Login