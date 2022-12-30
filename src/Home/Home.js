import React from 'react'
import {useEffect, useState} from 'react'
import * as ReactDOM from 'react-dom';
import moon from'./moon.png';
import mountains_behind from'./mountains_behind.png';
import mountains_front from'./mountains_front.png';
import stars from'./stars.png';
import coding from"./icon1.png";
import pet from"./icon2.png";
import ranking from"./icon3.png";

import './Home.css';
import {Link} from 'react-router-dom'

function Home() {
    const [sec, setSec] = useState(false);
    const [isActive, setIsActive] = useState(false);
    
    useEffect(()=>{
        let Stars = document.getElementById('stars');
        let Moon = document.getElementById('moon');
        let Mountains_behind = document.getElementById('mountains_behind');
        let Text = document.getElementById('text');
        let Btn = document.getElementById('btn');
        let Mountains_front = document.getElementById('mountains_front');
        const handleScroll = event =>{
            
            let value = window.scrollY;
            console.log('window.scrollY',value);
            Stars.style.left = value * 0.25 + 'px';
            Moon.style.top = value * 1.05 + 'px';
            Mountains_behind.style.top = value * 0.5 + 'px';
            Mountains_front.style.top = value * 0 +'px';
            Text.style.marginRight = value * 4 + 'px';
            Text.style.marginTop = value * 1.5 + 'px';
            Btn.style.marginTop = value * 1.5 + 'px';
        };

        window.addEventListener('scroll',handleScroll);

        return ()=>{
            window.removeEventListener('scroll',handleScroll);
        };
        
      
    },[]);

    return (
        <section>
            <section id='HomePage'>
                <img src={stars} id='stars'/>
                <img src={moon} id='moon'/>
                <img src={mountains_behind} id='mountains_behind'/>
                <h2 id='text'>Hello world!</h2>
                <img src={mountains_front} id='mountains_front'/>
                <a href='#sec' id='btn'>Introduction</a>
                <h1>Code Trek</h1>
            </section>
            <section id='sec'>
                <h1>An Online Judge Platform <br/>that makes coding more fun</h1>
                <div className='description'>
                    <div className='square' style={{marginTop: "170px"}}>
                        <span></span><span></span><span></span>
                        <div className='contentHome'>
                        <img src = {coding}/>
                        <p>Practice CPE exercises</p>
                        </div>
                    </div>
                    <div className='square2' style={{marginTop: "-100px"}}>
                        <span></span><span></span><span></span>
                        <div className='contentHome'>
                        <img src = {pet}/>
                        <p>Grow your pet from zero to hero</p>
                        </div>
                    </div>
                    <div className='square' style={{marginTop: "110px"}}>
                        <span></span><span></span><span></span>
                        <div className='contentHome'>
                        <img src = {ranking}/>
                        <p>Accumulate score and compete with everyone</p>
                        </div>
                    </div>
                </div>  
                <div className='arrow'>
                    <a href="/login" className="start">Start!</a>
                </div>
            </section> 
        </section>
       
    );
};

export default Home;