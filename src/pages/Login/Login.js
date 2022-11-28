import React from 'react'
import './Login.scss'
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Axios from "axios";
import { Link } from 'react-router-dom'

function Login(props) {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const {getMsg} = props;
    const navigate = useNavigate();
    const msg = {
        user: user,
        password: password
    };
    const login = ()=>{
      Axios.post('http://localhost:8000/login',{email:user,password:password}).then((response)=>{
        console.log(response);
      });
    };
  return (
    <div className='login'>
       <Link to="/"><h1>Code Trek</h1></Link>
        <div className='box'> 
            <h2>Login</h2>
            <input type="text" onChange={(e)=>setUser(e.target.value)}></input>
            <input type="password" onChange={(e)=>setPassword(e.target.value)}></input>
            <button onClick={()=>login()}>Log in</button>
            {/* <button onClick={()=>getMsg(msg)}>Log in</button> */}
            <Link to="/register" className='link'><button>Register</button></Link>
        </div>
    </div> 
  )
}

export default Login;