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
    const [showPassword, changeShowPassword] = useState(false)
    
    const navigate = useNavigate();
    
    const changeType = (e)=>{
      changeShowPassword(current => !current)
      console.log(showPassword)
    }
    const login = ()=>{
      Axios.post('https://asia-east1-online-judge-platform-29469.cloudfunctions.net/api/login',{email:email,password:password}).then((response)=>{
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
      let pswrd = document.getElementById('pswrd');
      let toggleBtn = document.getElementById('toggleBtn');
    })
    useEffect(()=>{
      let pswrd = document.getElementById('pswrd');
      let toggleBtn = document.getElementById('toggleBtn');
      
      //console.log(pswrd);
      //console.log(toggleBtn);
      if(showPassword){
        pswrd.setAttribute('type','text');
        toggleBtn.classList.add('hide');
      }
      else{
        pswrd.setAttribute('type','password');
        toggleBtn.classList.remove('hide');
      }
    },[showPassword])
  return (
    <div className='login'>
       <Link to="/"><h1>Code Trek</h1></Link>
        <div className='box'> 
            <h2>Login</h2>
            <div className='InputBox'>
              <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="email@gmail.com"></input>
            </div>
            <div className='InputBox'>
              <input type="password" onChange={(e)=>setPassword(e.target.value)} id='pswrd' placeholder="password"></input>
              <span id='toggleBtn' onClick={(e)=>changeType(e)}></span>
            </div>
            
            {errorMessage && <Message negative style={{fontSize:"10px",color:"red"}}>{errorMessage}</Message>}
            <button onClick={()=>login()}>Log in</button>
            {/* <button onClick={()=>getMsg(msg)}>Log in</button> */}
            <Link to="/register" className='link'><button>Register</button></Link>
        </div>
    </div> 
  )
}

export default Login;