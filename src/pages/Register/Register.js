import React from 'react'
import './Register.scss'
import { useEffect, useState } from "react";
import Axios from "axios";
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import egg1 from "./egg1.png"
import egg2 from "./egg2.png"
import egg3 from "./egg3.png"
import egg4 from "./egg4.png"
import profile1 from './profile1.png'
import profile2 from './profile2.png'
import profile3 from './profile3.png'
import profile4 from './profile4.png'

function Register() {
    const [userAccount, setUserAccount] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [checkpassword, setCheckPassword] = useState("");
    const register = ()=>{
      const data = Axios.post('https://asia-east1-online-judge-platform-29469.cloudfunctions.net/api/register',
      {email:userAccount,password:password,confirmpassword:checkpassword,username:userName});
      console.log(data);
      
    };
  return (
    <div className='register'>
      <Link to="/"><h1>Code Trek</h1></Link>
        <div className='box'>
            <form>
            <h2>register</h2>
            <input type="text" onChange={(e)=>setUserName(e.target.value)} placeholder="Name"></input>
            <input type="email" onChange={(e)=>setUserAccount(e.target.value)} placeholder="email@gmail.com"></input>
            <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password"></input>
            <input type="password" onChange={(e)=>setCheckPassword(e.target.value)} placeholder="checkPassword"></input>
            <h2 style={{margin:"5px"}}>Select Pet</h2>
            <div className='selectPet'>
              <label className='pickOne'>
                <input type="radio" name="pet" value="1" style={{width: "20px",height: "20px"}}/>
                <div className='pick'>
                  <FontAwesomeIcon icon={faCheck} />
                  <img src={egg1} alt="" style={{width: "96px",height: "144px"}}/>
                </div>
              </label>
              <label className='pickOne'>
                <input type="radio" name="pet" value="2" style={{width: "20px",height: "20px"}}/>
                <div className='pick'>
                  <FontAwesomeIcon icon={faCheck} />
                  <img src={egg2} alt="" style={{width: "96px",height: "144px"}}/>
                </div>
              </label>
              <label className='pickOne'>
                <input type="radio" name="pet" value="3" style={{width: "20px",height: "20px"}}/>
                <div className='pick'>
                  <FontAwesomeIcon icon={faCheck} />
                  <img src={egg3} alt="" style={{width: "96px",height: "144px"}}/>
                </div>
              </label>
              <label className='pickOne'>
                <input type="radio" name="pet" value="4" style={{width: "20px",height: "20px"}}/>
                <div className='pick'>
                  <FontAwesomeIcon icon={faCheck} />
                  <img src={egg4} alt="" style={{width: "96px",height: "144px",top:"-40px"}}/>
                </div>
              </label>
            </div>
            <h2 style={{margin:"5px",position:"relative"}}>Select Your Image Icon</h2>
            <div className='selectProfileImage'>
              <label className='pickOne'>
                <input type="radio" name="profileImage" value="1" style={{width: "20px",height: "20px"}}/>
                <div className='pick'>
                  <FontAwesomeIcon icon={faCheck} />
                  <img src={profile1} alt="" style={{width: "50px",height: "50px"}}/>
                </div>
              </label>
              <label className='pickOne'>
                <input type="radio" name="profileImage" value="1" style={{width: "20px",height: "20px"}}/>
                <div className='pick'>
                  <FontAwesomeIcon icon={faCheck} />
                  <img src={profile2} alt="" style={{width: "50px",height: "50px"}}/>
                </div>
              </label>
              <label className='pickOne'>
                <input type="radio" name="profileImage" value="1" style={{width: "20px",height: "20px"}}/>
                <div className='pick'>
                  <FontAwesomeIcon icon={faCheck} />
                  <img src={profile3} alt="" style={{width: "50px",height: "50px"}}/>
                </div>
              </label>
              <label className='pickOne'>
                <input type="radio" name="profileImage" value="1" style={{width: "20px",height: "20px"}}/>
                <div className='pick'>
                  <FontAwesomeIcon icon={faCheck} />
                  <img src={profile4} alt="" style={{width: "50px",height: "50px"}}/>
                </div>
              </label>
            </div>
            <input type="submit" value="register" className='button'></input>
            </form>
        </div>
    </div> 
  )
}

export default Register;