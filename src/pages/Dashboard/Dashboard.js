import { Link , Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import RankList from '../components/Dashboard/Rank/RankList';
import Pet from '../components/Dashboard/Pet/Pet';
import Profile from '../components/Dashboard/Profile/Profile';
import Store from '../components/Dashboard/Store/Store';
import {useState, useEffect} from 'react'
import CodeLink from '../components/Dashboard/CodeLink/CodeLink'
import './Dashboard.css';
function Dashboard() {
  return (
      <section className='dashboard'>
        <div className='ball1'></div>
        <div className='left'>
          <Profile/>
          <CodeLink/>
        </div>
        <Routes>
          <Route path="/rankList" element={<RankList/>} />
          <Route path="/pet" element={<Pet/>} />
          <Route path="/store" element={<Store/>} />
        </Routes>
        <div className='button'>
          <Link className="" to="/dashboard/pet">Pet</Link>
          <Link className='' to="/dashboard/store">Store</Link>
          <Link className='' to="/dashboard/rankList">Rank</Link>
        </div>
        
      </section>
  );
}

export default Dashboard;