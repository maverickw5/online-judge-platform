import { Link , Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import RankList from './components/Rank/RankList';
import Pet from './components/Pet/Pet';
import Profile from './components/Profile/Profile';
import Store from './components/Store/Store';
import {useState, useEffect} from 'react'
import CodeLink from './components/CodeLink/CodeLink'
import './Dashboard.css';
import Axios from 'axios';

function Dashboard(props) {
  //const {changeEmail, email} = props;
  function Logout(){
    localStorage.clear()
    //changeEmail("logout");
  }
    const [name, setName] = useState("");
    const [exp,setExp] = useState();
    const [level, setLevel] = useState();
    const [money, setMoney] = useState();
    const [profilePicture, setProfilePicture] = useState();
    const [score, setScore] = useState();
    const [currentMoney, setCurrentMoney]= useState(money)
  useEffect(()=>{
    console.log("render");
    Axios.post('http://localhost:8000/profile',{userID:window.localStorage.getItem('userID')})
    .then((response)=>{
      //console.log(response);
      const data = response.data;
      console.log(data);
      window.sessionStorage.setItem('money',data.money);
      setName(data.username);
      setScore(data.score);
      setLevel(data.level);
      setMoney(window.sessionStorage.getItem('money'));
      setProfilePicture(data.profilePicture);
      window.sessionStorage.setItem('profilePicture',data.profilePicture);
      setExp(data.exp);
      setCurrentMoney(data.money);
     
    });
  },[])
  return (
      <section className='dashboard'>
        <div className='ball1'></div>
        <div className='left'>
          <Profile name={name} score={score} level={level} profilePicture={profilePicture} money={window.sessionStorage.getItem('money')}/>
          <CodeLink/>
        </div>
        <Routes>
          <Route path="/rankList" element={<RankList/>} />
          <Route path="/pet" element={<Pet/>} />
          <Route path="/store" element={<Store/>} />
        </Routes>
        <div className='right'>
        <RankList/>
        <div className='button'>
          <Link className="" to="/dashboard/pet">Pet</Link>
          <Link className='' to="/dashboard/store">Store</Link>
          <Link className='' to="/" onClick={(e)=>Logout()}>LogOut</Link>
        </div>
        </div>
        
      </section>
  );
}

export default Dashboard;