import './App.css';
import SignUp from './Components/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<SignUp />} />
        </Routes>
    </BrowserRouter>
  )
};

export default App;
