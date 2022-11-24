import React from 'react'
import profile1 from './profile1.png'
import profile2 from './profile2.png'
import profile3 from './profile3.png'
import profile4 from './profile4.png'
import './Profile.css';
import {useState, useEffect} from 'react'
import Axios from 'axios'
function Profile() {
    const [profileImg, setProfileImg] = useState(profile1);
    const [isActive, setIsActive] = useState(false);
    const [name, setName] = useState("");
    function chooseProfile1(e){
        setProfileImg(profile1)
        setIsActive(current => !current);
    }
    function chooseProfile2(e){
        setProfileImg(profile2)
        setIsActive(current => !current);
    }
    function chooseProfile3(e){
        setProfileImg(profile3)
        setIsActive(current => !current);
    }
    function chooseProfile4(e){
        setProfileImg(profile4)
        setIsActive(current => !current);
    }
    function chooseProfile(e){
        setIsActive(current => !current);
    }
  return (
    <div className='proflie'>
        <div className="p">
            <div className='name'>
                <div>
                    <img src = {profileImg}  alt="" style={{position:"relative",left:"25%",width: "50px",height:"50px",cursor:"pointer"}} onClick={(e)=>chooseProfile()}/>
                </div>
                <p> HsiaoChing</p>
            </div> 
            <div className='score'>
                <h4>Score</h4>
                <h4>1234</h4>
            </div>
            <div className='coin'>
                <h4>Coin</h4>
                <h4>1234</h4>
            </div>
        </div>
        <div className={isActive ? 'c' : 'ch'}>
            <h4>choose profile</h4>
            <img src={profile1} alt="" style={{position:"relative",width: "50px",height:"50px",cursor:"pointer"}} onClick={(e)=>chooseProfile1(e)}/>
            <img src={profile2} alt="" style={{position:"relative",width: "50px",height:"50px",cursor:"pointer"}} onClick = {(e)=>chooseProfile2(e)}/>
            <img src={profile3} alt="" style={{position:"relative",width: "50px",height:"50px",cursor:"pointer"}} onClick = {(e)=>chooseProfile3(e)}/>
            <img src={profile4} alt="" style={{position:"relative",width: "50px",height:"50px",cursor:"pointer"}} onClick = {(e)=>chooseProfile4(e)}/>
        </div> 
    </div>
  )
}

export default Profile

