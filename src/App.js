import { useEffect,useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Judge from './pages/Judge/Judge';

function App() {
  const [email, setEmail] = useState("")
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={window.localStorage.getItem('userID') ? <Navigate to ="/dashboard/pet"/>:<Register />} />
        <Route exact path="/login" element={window.localStorage.getItem('userID') ? <Navigate to ="/dashboard/pet"/>:<Login changeEmail={setEmail}/>} />
        <Route exact path="/dashboard/*" element={window.localStorage.getItem('userID') ? <Dashboard />:<Navigate to ="/"/>} />
        <Route exact path="/judge" element={<Judge/>} />
      </Routes>
    </Router>
  );
}

export default App;
