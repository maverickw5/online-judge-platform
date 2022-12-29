import React from 'react'
import './Pet.css'

import candy from "./candy.png"
import cookie from "./cookie.png"
import strawberry from "./fruit.png"
import {useEffect, useState} from 'react'
import Axios from "axios";

function Pet() {
  const [petName, setPetName] = useState();
  const [petLevel, setPetLevel] = useState(0);
  const [petURL,setPetURL] = useState();
  const [petExp, setPetExp] = useState(0);
  const [totalCookie, settotalCookie] = useState();
  const [totalStrawberry, settotalStrawberry] = useState();
  const [totalCandy, settotalCandy] = useState();
  const [petLevelView, setPetLevelView] = useState(0);
  const [PetExpView, setPetExpView] = useState(0);
  const [reload, setReload] = useState(false);
  const [inputBlock, setInputBlock] = useState(false);
  const [move, setMove] = useState(0);

  function changeName(){
    //console.log("hello");
    setInputBlock(true);
    console.log(petName);
   
  }
  function submitName(){
    Axios.get(`https://120.126.151.169:5001/setPetNAME?email=`+window.localStorage.getItem('email')+`&name=`+`${petName}`).then((response)=>{
      setInputBlock(false);
    })
  }
 
  //喂餅乾
  async function feedCookie(){
    console.log("subcookie");
    setMove(2);
    if(totalCookie > 0){
        //先回傳後端減少的食物
        await Axios.get(`https://120.126.151.169:5001/setUserCookieSUB?email=`+ window.localStorage.getItem('email')).then(()=>{
          settotalCookie(totalCookie - 1);
        })
        //回傳後端寵物的經驗
        setPetExp(parseInt(petExp+5));
        setPetExpView(petExp+5);
        await Axios.get(`https://120.126.151.169:5001/setPetEXP?email=`+ window.localStorage.getItem('email') +`&exp=` + `${parseInt(petExp+5)}`).then(()=>{
          if(PetExpView+5 >= 100){
            setPetExpView(petExp+5 - 100*(petLevel+1));
          }
        })
      
        await Axios.get(`https://120.126.151.169:5001/setPetLEVEL?email=`+ window.localStorage.getItem('email') +`&level=` + `${Math.floor((petExp+5)/100)}`).
        then(()=>{
          console.log(Math.floor((petExp+10)/100));
          console.log(Math.floor((petExp+5)/100));
          setReload((Math.floor((petExp+10)/100) - Math.floor((petExp+5)/100) >= 1))
        }).then(()=>{
          if(reload) window.location.reload(true);
        })
        setPetLevelView(Math.floor((petExp+5)/100));
        
        //window.location.reload(true);
    }
    else{
      alert("you don't have enough cookie");
    }
     
  }

  //喂草莓
  async function feedStrawberry(){
    console.log("substrawberry");
    setMove(2)
    if(totalStrawberry > 0){
      await Axios.get(`https://120.126.151.169:5001/setUserStrawberrySUB?email=`+ window.localStorage.getItem('email')).then(()=>{
        settotalStrawberry(totalStrawberry - 1);
       })
      //回傳後端寵物的經驗
      setPetExp(parseInt(petExp+6));
      setPetExpView(petExp+6);
      await Axios.get(`https://120.126.151.169:5001/setPetEXP?email=`+ window.localStorage.getItem('email') +`&exp=` + `${parseInt(petExp+6)}`).then(()=>{
        if(PetExpView+6 >= 100){
          setPetExpView(petExp+6 - 100*(petLevel+1));
        }
       })
       await Axios.get(`https://120.126.151.169:5001/setPetLEVEL?email=`+ window.localStorage.getItem('email') +`&level=` + `${Math.floor((petExp+6)/100)}`).
       then(()=>{
        console.log(Math.floor((petExp+12)/100));
        console.log(Math.floor((petExp+6)/100));
         setReload((Math.floor((petExp+12)/100) - Math.floor((petExp+6)/100) >= 1))
       }).then(()=>{
         if(reload) window.location.reload(true);
       })
       setPetLevelView(Math.floor((petExp+6)/100));
      //window.location.reload(true);
      }
    else{
      alert("you don't have enough Strawberry");
    }
  }

  //喂糖果
  async function feedCandy(){
    console.log("subCandy");
    setMove(2);
    if(totalCandy>0){
      await Axios.get(`https://120.126.151.169:5001/setUserCandySUB?email=`+ window.localStorage.getItem('email')).then(()=>{
        settotalCandy(totalCandy - 1);
       })
      //回傳後端寵物的經驗
      setPetExp(parseInt(petExp+4));
      setPetExpView(petExp+4);
      await Axios.get(`https://120.126.151.169:5001/setPetEXP?email=`+ window.localStorage.getItem('email') +`&exp=` + `${parseInt(petExp+4)}`).then(()=>{
        if(PetExpView+4 >= 100){
          setPetExpView(petExp+4 - 100*(petLevel+1));
        }
       })
       await Axios.get(`https://120.126.151.169:5001/setPetLEVEL?email=`+ window.localStorage.getItem('email') +`&level=` + `${Math.floor((petExp+4)/100)}`).
       then(()=>{
        console.log(Math.floor((petExp+8)/100));
        console.log(Math.floor((petExp+4)/100));
         setReload((Math.floor((petExp+8)/100) - Math.floor((petExp+4)/100) >= 1))
       }).then(()=>{
         if(reload) window.location.reload(true);
       })
       setPetLevelView(Math.floor((petExp+4)/100));
      //window.location.reload(true);
    }
    else{
      alert("you don't have enough Candy");
    }
  }

  //第一次進來時會render
  useEffect(()=>{
    //console.log("render");
    //取得所有資料
  Axios.get(`https://120.126.151.169:5001/getPetDATA?email=`+ window.localStorage.getItem('email')).then((response)=>{
      //console.log(response);
      const data = response.data;
      //console.log(data);
      setPetLevel(parseInt(data.level));
      setPetName(data.petname);
      setPetExp(parseInt(data.exp));
      setPetLevelView(Math.floor(parseInt(data.exp)/100));
      setPetExpView(parseInt(data.exp) - 100*Math.floor(parseInt(data.exp)/100))
    })
    //取得寵物的圖片url
    Axios.get(`https://120.126.151.169:5001/getPetIMAGE?email=`+window.localStorage.getItem('email')).then((response)=>{
      //console.log(response);
      const data = response.data;
      //console.log(data);
      setPetURL(data);
    })
    //取得總食物數量
    Axios.get(`https://120.126.151.169:5001/getUserFOOD?email=`+window.localStorage.getItem('email')).then((response)=>{
      //console.log(response);
      const data = response.data;
      settotalCookie(parseInt(data.cookie));
      settotalStrawberry(parseInt(data.strawberry));
      settotalCandy(parseInt(data.candy))
      //console.log(data);
    })
  },[])

  //每次寵物經驗更動，就再 render一次
  useEffect(()=>{
    
    Axios.get(`https://120.126.151.169:5001/getPetDATA?email=`+ window.localStorage.getItem('email')).then((response)=>{
      //console.log(response);
      const data = response.data;
      //console.log(data);
      setPetLevelView(Math.floor(parseInt(data.exp)/100));
      setPetExpView(petExp - 100 * Math.floor(petLevelView))
    });
    
    Axios.get(`https://120.126.151.169:5001/getPetIMAGE?email=`+window.localStorage.getItem('email')).then((response)=>{
      //console.log(response);
      const data = response.data;
      //console.log(data);
      setPetURL(data);
    });
   
},[petExp])



  return (
    <div className='pet'>
      
      <h3 >Pet Name:  <span className={inputBlock? "unvisible":"visible"} onClick={()=>changeName()}>{petName} </span>
        <input type="text" onChange={(e)=>setPetName(e.target.value)} className={inputBlock? "visible":"unvisible"}/><button onClick={()=>submitName()} style={{color: "white"}} className={inputBlock? "visible":"unvisible"}>change</button></h3> 
       
      <h3>Pet level:{petLevelView}</h3>
      <h3>pet exp:{PetExpView}</h3>  
      <div className='pet_block'>  
      <img src={petURL} onClick={()=>setMove(1)}  onAnimationEnd={()=>setMove(0)} move={move} id='egg'/>
      </div>
      <div>
        <h3 style={{color:"white",position:"absolute",bottom:"100px"}}>Food</h3>
      </div>
      <div className='food'>
        <div>
          <img src={cookie} alt="" style={{width:"70px",height:"70px"}} onClick={(e)=>{feedCookie()}} onAnimationEnd={()=>setMove(0)} move={move}/>
          <h3 style={{color:"white"}}>{totalCookie}</h3>
        </div>
       <div>
        <img src={strawberry} alt="" style={{width:"90px",height:"90px"}} onClick={(e)=>{feedStrawberry()}} onAnimationEnd={()=>setMove(0)} move={move}/>
        <h3 style={{color:"white"}}>{totalStrawberry}</h3>
       </div>
        <div>
          <img src={candy} alt="" style={{width:"70px",height:"70px"}} onClick={(e)=>{feedCandy()}} onAnimationEnd={()=>setMove(0)} move={move}/>
          <h3 style={{color:"white"}}>{totalCandy}</h3>
        </div>
      </div>
    </div>
  )
}

export default Pet
//回傳sub1 並且自動加經驗，前端判斷經驗是否到下一個等級，然後將經驗userEmail、回傳後端，如有升級，也須將等級回傳後端）