import React from 'react'
import store from "./store.png"
import {useEffect, useState} from 'react'
import './Store.css'
export const EggQuantity = 3

const Store = () => {
  const[coin,setCoin] = useState(1234); 
  const[Egg,getEgg]= useState(Math.floor(Math.random()*EggQuantity)+1);
  const[im,changeIm] = useState(store);

  function GetEgg(){
    setCoin (prev => prev - 10);
    getEgg(Math.floor(Math.random()*EggQuantity)+1);
    window.alert('抽到'+Egg+'號蛋');
    
  };
  return (
    <div className='store'>
      <h3>Store</h3>
      <h3>coin :<span>{coin}</span></h3>
      <img src={im} alt=""  onClick = {GetEgg}/>
      
    </div>
  );
};


export default Store