import React from 'react'
import './Pet.css'
import egg1 from "./egg1.png"
import egg2 from "./egg2.png"
import egg3 from "./egg3.png"
import egg4 from "./egg4.png"
import {useEffect, useState} from 'react'

function Pet() {
  const [petName, setPetName] = useState("Hi");
  const [petId, setPetId] = useState(1);
  const [pet, setPet] = useState();
  function changeName(){
    console.log("hello");
  }
  function eggMove(){
    
  }
  useEffect(()=>{if(petId===1) setPet(egg1);if(petId===2) setPet(egg2);if(petId===3) setPet(egg3);if(petId===4) setPet(egg4);
  },[])
  return (
    <div className='pet'>
      <h3>Pet level:</h3>
      <h3 onClick={()=>changeName()}>Pet Name: <span>{petName}</span></h3>    
      <img src={egg1} alt="" onClick={()=>eggMove()} id="egg"/>
      <div>
        <button>Feed</button>
        <button>composed</button>
      </div>
    </div>
  )
}

export default Pet