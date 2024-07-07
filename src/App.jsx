import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login'; // Corrected import
import SignUp from './pages/SignUp';

function App() {
  return (
    <div>
      <Routes>
        <Route path = '/' element={<Navigate to ='/login'></Navigate>}></Route>
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
