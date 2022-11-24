import React from 'react'
import './Login.scss'
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Axios from "axios";

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
      Axios.post('http://localhost:3001/login',{userAccount:user,password:password}).then((response)=>{
        console.log(response);
      });
    };
  return (
    <div className='login'>
        <div className='box'>
            <h2>Login</h2>
            <input type="text" onChange={(e)=>setUser(e.target.value)}></input>
            <input type="password" onChange={(e)=>setPassword(e.target.value)}></input>
            <button onClick={()=>login()}>Log in</button>
            {/* <button onClick={()=>getMsg(msg)}>Log in</button> */}
            <button >Sign up</button>
        </div>
    </div> 
  )
}

export default Login;