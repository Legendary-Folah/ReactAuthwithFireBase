import './App.css';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Error from './Components/Error';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Container className='d-flex 
        align-items-center 
        justify-content-center'
        style={{ minHeight: '100vh' }}>
        <div className='w-100 mt-0' 
          style={{ maxWidth: '400px' }}>
          <SignUp />
        </div>
      </Container>
    </AuthProvider>
  )
};

export default App;
