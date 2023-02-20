import './App.css';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Error from './Components/Error';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
            <ROute path='/signup' element={<SignUp />} />
            <Route path='*' element={<Error />} />
        </Routes>
    </BrowserRouter>
  )
};

export default App;
