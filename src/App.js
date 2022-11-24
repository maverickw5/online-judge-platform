import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Judge from './pages/Judge/Judge';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/dashboard/*" element={<Dashboard />} />
        <Route exact path="/judge" element={<Judge />} />
      </Routes>
    </Router>
  );
}

export default App;
