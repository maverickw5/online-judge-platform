import React from 'react'
import profile1 from './profile1.png'
import profile2 from './profile2.png'
import profile3 from './profile3.png'
import profile4 from './profile4.png'
import './Profile.css';
import {useState, useEffect} from 'react'
import Axios from 'axios'
function Profile(props) {
    const [profileImg, setProfileImg] = useState(profile1);
    const [isActive, setIsActive] = useState(false);
    const [money, setMoney] = useState()
    
    function chooseProfile1(e){
        setProfileImg(profile1);
        window.sessionStorage.setItem('profilePicture',1);
            Axios.post('http://localhost:8000/updateprofile',{userID:window.localStorage.getItem('userID'),profilePicture:"1"})
            .then((response)=>{
              
            });
        setIsActive(current => !current);
    }
    function chooseProfile2(e){
        setProfileImg(profile2);
        window.sessionStorage.setItem('profilePicture',2);
        Axios.post('http://localhost:8000/updateprofile',{userID:window.localStorage.getItem('userID'),profilePicture:"2"})
        .then((response)=>{
        });
        setIsActive(current => !current);
    }
    function chooseProfile3(e){
        setProfileImg(profile3);
        window.sessionStorage.setItem('profilePicture',3);
        Axios.post('http://localhost:8000/updateprofile',{userID:window.localStorage.getItem('userID'),profilePicture:"3"})
        .then((response)=>{
        });
        setIsActive(current => !current);
    }
    function chooseProfile4(e){
        setProfileImg(profile4);
        window.sessionStorage.setItem('profilePicture',4);
        Axios.post('http://localhost:8000/updateprofile',{userID:window.localStorage.getItem('userID'),profilePicture:"4"})
        .then((response)=>{
        });
        setIsActive(current => !current);
    }
    function chooseProfile(e){
        setIsActive(current => !current);
    }
    useEffect(()=>{
        console.log(props.profilePicture);
        if(window.sessionStorage.getItem('profilePicture')==1){
            setProfileImg(profile1);
        }
        if(window.sessionStorage.getItem('profilePicture')==2){
            setProfileImg(profile2);
        }
        if(window.sessionStorage.getItem('profilePicture')==3){
            setProfileImg(profile3);
        }
        if(window.sessionStorage.getItem('profilePicture')==4){
            setProfileImg(profile4);
        }
        
      },[])
    useEffect(()=>{
        setMoney(window.sessionStorage.getItem('money'))
    },[window.sessionStorage.getItem('money')])
  return (
    <div className='proflie'>
        <div className="p">
            <div className='name'>
                <div>
                    <img src = {profileImg}  alt="" style={{position:"relative",left:"25%",width: "50px",height:"50px",cursor:"pointer"}} onClick={(e)=>chooseProfile()}/>
                </div>
                <p>{props.name}</p>
            </div> 
            <div className='score'>
                <h4>level</h4>
                <h4>{props.level}</h4>
            </div>
            <div className='score'>
                <h4>Score</h4>
                <h4>{props.score}</h4>
            </div>
            <div className='coin'>
                <h4>Coin</h4>
                <h4>{props.money}</h4>
            </div>
        </div>
        <div className={isActive ? 'c' : 'ch'}>
            <h4>choose profile</h4>
            <div className='profileimg' style={{display:"flex",flexDirection:"row"}}>
                <img src={profile1} alt="" style={{position:"relative",width: "50px",height:"50px",cursor:"pointer"}} onClick={(e)=>chooseProfile1(e)}/>
                <img src={profile2} alt="" style={{position:"relative",width: "50px",height:"50px",cursor:"pointer"}} onClick = {(e)=>chooseProfile2(e)}/>
                <img src={profile3} alt="" style={{position:"relative",width: "50px",height:"50px",cursor:"pointer"}} onClick = {(e)=>chooseProfile3(e)}/>
                <img src={profile4} alt="" style={{position:"relative",width: "50px",height:"50px",cursor:"pointer"}} onClick = {(e)=>chooseProfile4(e)}/>
            </div>
           
        </div> 
    </div>
  )
}

export default Profile

