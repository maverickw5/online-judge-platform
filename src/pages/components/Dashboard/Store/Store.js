import React from 'react'
import store from "./store.png"
import {useEffect, useState} from 'react'
import './Store.css'
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
export const foodQuantity = 3

const Store = (props) => {
  const navigate = useNavigate();
  const[food,getFood]= useState(Math.floor(Math.random()*foodQuantity));
  const[im,changeIm] = useState(store);
  const [money, setMoney] = useState(props.money)
  const foodName = ['cookie','strawberry','candy']
  async function GetFood (){
    
    //setCoin (prev => prev - 30);
    if(window.sessionStorage.getItem('money') < 30){
      alert("You don't have enough money");
    }
    else{
      getFood(Math.floor(Math.random()*foodQuantity));
      window.alert('抽到'+ foodName[food]);
      await Axios.post('http://localhost:8000/updatemoney',{userID: window.localStorage.getItem('userID'), moneyReduction:30}).then((res)=>{
      let data = res.data;
      console.log(data);
      console.log("I'm working")
      window.sessionStorage.setItem('money',data.money);
      });
      if(food === 0){
        Axios.get(`http://localhost:3001/setUserCookieADD?email=` + window.localStorage.getItem('email')).then((response)=>{
        let data = response.data;
        console.log(data);
      })
      }
      else if(food === 1){
        Axios.get(`http://localhost:3001/setUserStrawberryADD?email=` + window.localStorage.getItem('email')).then((response)=>{
        let data = response.data;
        console.log(data);
      })
      }
      else if(food === 2){
        Axios.get(`http://localhost:3001/setUserCandyADD?email=` + window.localStorage.getItem('email')).then((response)=>{
        let data = response.data;
        console.log(data);
      })
      }
      
      window.location.reload(true);
    }
    
  };


  return (
    <div className='store'>
      <h3>Store</h3>
      <h3>$<span>30</span></h3>
      <img src={im} alt=""  onClick = {GetFood}/>
      
    </div>
  );
};


export default Store