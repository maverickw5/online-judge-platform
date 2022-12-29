import React from 'react'
import './Register.scss'
import { useEffect, useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import Axios from "axios";
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import {Message} from 'semantic-ui-react'
import bcrypt from 'bcryptjs'

import egg1 from "./egg1.png"
import egg2 from "./egg2.png"
import egg3 from "./egg3.png"
import egg4 from "./egg4.png"
import profile1 from './profile1.png'
import profile2 from './profile2.png'
import profile3 from './profile3.png'
import profile4 from './profile4.png'
import { data } from 'autoprefixer';
const salt = bcrypt.genSaltSync(10)


function Register() {
    const navigate = useNavigate();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const [userName, setUserName] = useState("");
    const [checkpassword, setCheckPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState('');
    const [profileImg, setProfileImg] = useState('')
    const [pet, setPet] = useState('');
    const [showPassword, changeShowPassword] = useState(false)
    const [showCheckPassword, changeShowCheckPassword] = useState(false)

    //註冊
    const register = (e)=>{
        e.preventDefault();
        const email = emailInputRef.current.value;
        const password = passwordInputRef.current.value;
        //檢查password有沒有一樣
        if(checkpassword !== password){
          setErrorMessage("password doesn't match");
        }
        else{
          setErrorMessage('');
        }
        const hashPassword = bcrypt.hashSync(password,10);
      
        //can call post api here
      const PetSet = Axios.get(`http://120.126.151.169:5001/setPetDATA?email=` + emailInputRef.current.value + `&type=`+pet).then((response)=>{

      })
      const data = Axios.post('https://asia-east1-online-judge-platform-29469.cloudfunctions.net/api/register',//https://asia-east1-online-judge-platform-29469.cloudfunctions.net/api/register
      {username:userName,email:emailInputRef.current.value,password:hashPassword,confirmpassword:hashPassword,profilePicture:profileImg})
      .then((response)=>{
        console.log(response);//回傳一個結果
        const data = response.data;
        console.log(data.msg);
        if(data.msg === "User added"){
          navigate('/login');
        }
        else if(data.msg === "email already exist"){
          setErrorMessage('email already exist');
        }
      });
    }
    //查看密碼
    const changeType = (e)=>{
      changeShowPassword(current => !current)
      console.log(showPassword)
    }
    //查看檢查的密碼
    const changeCheckType = (e)=>{
      changeShowCheckPassword(current => !current)
      console.log(showCheckPassword)
    }

    //檢查密碼是否正確，因為每次更新都會rerender一次，所以可以用useEffect
    useEffect(()=>{
      //如果checkpassword和input一樣，錯誤訊息設為NULL
      if(checkpassword == passwordInputRef.current.value){
        setErrorMessage('');
      }
      else{
        setErrorMessage("password doesn't match");
      }
      //console.log(checkpassword);
    })

    //查看密碼
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

    //查看檢查密碼
    useEffect(()=>{
      let CheckPswrd = document.getElementById('CheckPswrd');
      let toggleBtn = document.getElementById('toggleBtnCheck');
      
      //console.log(pswrd);
      //console.log(toggleBtn);
      if(showCheckPassword){
        CheckPswrd.setAttribute('type','text');
        toggleBtn.classList.add('hide');
      }
      else{
        CheckPswrd.setAttribute('type','password');
        toggleBtn.classList.remove('hide');
      }
    },[showCheckPassword])
    
  return (
    <div className='register'>
      <Link to="/"><h1>Code Trek</h1></Link>
        <div className='box'>
            <form>
              <h2>register</h2>
              <div className='InputBox'>
                <input type="text" onChange={(e)=>setUserName(e.target.value)} placeholder="Name"></input>
              </div>
              <div className='InputBox'>
                <input type="email" ref={emailInputRef} placeholder="email@gmail.com"></input>
              </div>
             
              <div className='InputBox'>
                <input type="password" ref={passwordInputRef} placeholder="Password" id='pswrd'></input>
                <span id='toggleBtn' onClick={(e)=>changeType()}></span>
              </div>
              <div className='InputBox'>
                <input type="password" onChange={(e)=>setCheckPassword(e.target.value)} placeholder="checkPassword" id='CheckPswrd'></input>
                <span id='toggleBtnCheck' onClick={(e)=>changeCheckType()}></span>
              </div>
            
              {errorMessage && <Message negative style={{fontSize:"10px",color:"red"}}>{errorMessage}</Message>}
              <h2 style={{margin:"5px"}}>Select Pet</h2>
              <div className='selectPet'>
                <label className='pickOne'>
                  <input type="radio" name="pet" value="1" style={{width: "20px",height: "20px"}} onChange={(e)=>{setPet(e.target.value)}}/>
                  <div className='pick'>
                    <FontAwesomeIcon icon={faCheck} />
                    <img src={egg1} alt="" style={{width: "96px",height: "144px"}}/>
                  </div>
                </label>
                <label className='pickOne'>
                  <input type="radio" name="pet" value="2" style={{width: "20px",height: "20px"}} onChange={(e)=>{setPet(e.target.value)}}/>
                  <div className='pick'>
                    <FontAwesomeIcon icon={faCheck} />
                    <img src={egg2} alt="" style={{width: "96px",height: "144px"}}/>
                  </div>
                </label>
                {/* <label className='pickOne'>
                  <input type="radio" name="pet" value="3" style={{width: "20px",height: "20px"}} onChange={(e)=>{setPet(e.target.value)}}/>
                  <div className='pick'>
                    <FontAwesomeIcon icon={faCheck} />
                    <img src={egg3} alt="" style={{width: "96px",height: "144px"}}/>
                  </div>
                </label> */}
                <label className='pickOne'>
                  <input type="radio" name="pet" value="4" style={{width: "20px",height: "20px"}} onChange={(e)=>{setPet(e.target.value)}}/>
                  <div className='pick'>
                    <FontAwesomeIcon icon={faCheck} />
                    <img src={egg4} alt="" style={{width: "96px",height: "144px",top:"-40px"}}/>
                  </div>
                </label>
              </div>
              <h2 style={{margin:"5px",position:"relative"}}>Select Your Image Icon</h2>
              <div className='selectProfileImage'>
                <label className='pickOne'>
                  <input type="radio" name="profileImage" value="1" style={{width: "20px",height: "20px"}} onChange={(e)=>{setProfileImg(e.target.value)}}/>
                  <div className='pick'>
                    <FontAwesomeIcon icon={faCheck} />
                    <img src={profile1} alt="" style={{width: "50px",height: "50px"}}/>
                  </div>
                </label>
                <label className='pickOne'>
                  <input type="radio" name="profileImage" value="2" style={{width: "20px",height: "20px"}} onChange={(e)=>{setProfileImg(e.target.value)}}/>
                  <div className='pick'>
                    <FontAwesomeIcon icon={faCheck} />
                    <img src={profile2} alt="" style={{width: "50px",height: "50px"}}/>
                  </div>
                </label>
                <label className='pickOne'>
                  <input type="radio" name="profileImage" value="3" style={{width: "20px",height: "20px"}} onChange={(e)=>{setProfileImg(e.target.value)}}/>
                  <div className='pick'>
                    <FontAwesomeIcon icon={faCheck} />
                    <img src={profile3} alt="" style={{width: "50px",height: "50px"}}/>
                  </div>
                </label>
                <label className='pickOne'>
                  <input type="radio" name="profileImage" value="4" style={{width: "20px",height: "20px"}} onChange={(e)=>{setProfileImg(e.target.value)}}/>
                  <div className='pick'>
                    <FontAwesomeIcon icon={faCheck} />
                    <img src={profile4} alt="" style={{width: "50px",height: "50px"}}/>
                  </div>
                </label>
              </div>
              <button type="submit" className='button' onClick={(e)=>register(e)}>Register</button>
            </form>
        </div>
    </div> 
  )
}

export default Register;