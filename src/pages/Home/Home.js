import React from 'react'
import {useEffect, useState} from 'react'
import * as ReactDOM from 'react-dom';
import moon from'./moon.png';
import mountains_behind from'./mountains_behind.png';
import mountains_front from'./mountains_front.png';
import stars from'./stars.png';
import './Home.css';
import {Link} from 'react-router-dom'


//一進網頁的第一個畫面 介紹網頁
function Home() {
    
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
                {/* <div className='box'>
                    
                    <p>網頁描述</p>
                </div> */}
               
            </section>
            <section id='sec'>
                <div className='description'>
                    <h2>網頁介紹</h2>
                    <p>描述</p>
                    <div className='arrow'>
                        <a href="/login" className="start">start</a>
                    </div>
                </div>  
            </section>
        </section>
       
    );
};

export default Home;


//看要不要做像教學影片那樣的形式 底下用頁面截圖做教學