import React from 'react'
import Axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import {Message} from 'semantic-ui-react'
import './Login.scss'


function Login({changeEmail}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    
    const navigate = useNavigate();
    
    const login = ()=>{
      Axios.post('http://localhost:8000/login',{email:email,password:password}).then((response)=>{
        console.log(response);
        const data = response.data;
        console.log(data.msg);
        if(data.msg === "user login"){
          changeEmail(email);
          window.localStorage.setItem('email',email);
          window.localStorage.setItem('userID',data.userID);
          setErrorMessage('');
          //navigate('/dashboard/pet');
        }
        else if(data.msg === "email incorrect/not exist"){
          setErrorMessage("wrong email or email not exist");
        }
        else if(data.msg === "wrong password"){
          setErrorMessage("wrong password");
        }
      });
    };
    useEffect(()=>{
      //每次render偵測是否有錯誤
      if(errorMessage ==="email incorrect/not exist"){
        setErrorMessage("wrong email or email not exist");
      }
      else if(errorMessage === "wrong password"){
        setErrorMessage("wrong password");
      }
    })
  return (
    <div className='login'>
       <Link to="/"><h1>Code Trek</h1></Link>
        <div className='box'> 
            <h2>Login</h2>
            
            <input type="text" onChange={(e)=>setEmail(e.target.value)}></input>
            <input type="password" onChange={(e)=>setPassword(e.target.value)}></input>
            {errorMessage && <Message negative style={{fontSize:"10px",color:"red"}}>{errorMessage}</Message>}
            <button onClick={()=>login()}>Log in</button>
            {/* <button onClick={()=>getMsg(msg)}>Log in</button> */}
            <Link to="/register" className='link'><button>Register</button></Link>
        </div>
    </div> 
  )
}

export default Login;