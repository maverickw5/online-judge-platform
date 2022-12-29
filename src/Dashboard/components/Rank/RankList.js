import './RankList.css';
import {useEffect, useState} from 'react'
import Axios from "axios";
function RankList() {
    const regRank = [];
    const [rankList, setRankList] = useState([])
    useEffect(()=>{
        const Rank = Axios.get('http://120.126.151.169:5001/getRANK').then((user)=>{
            let data = user.data;
            //console.log(data[2]);
            let rankLength = Object.keys(data);
            const regRank = [];
            //console.log(rankLength.length);
            for(let i = 1; i <rankLength.length+1; i++ ){
                regRank.push(data[i]);
                setRankList(regRank);
            }
            //console.log(rankList);
                 
        });
    },[])
    
  return (
        <div className="ranklist">
            <h3>Rank List</h3>
            <div className="list">
                {
                    rankList.map((rank,index)=>{
                        return(
                            <div className="contentRANK">
                                <h4 className="rank">{index+1}</h4>
                                <h4>name : {rank.username}</h4>
                                <h4>score : {rank.score}</h4>
                            </div>
                        )
                    })
                   
                }
            </div>
        </div>
    
  );
}

export default RankList;
