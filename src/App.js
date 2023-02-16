import './App.css';


function App() {
  return (
    <div className='App'>
        <form className='form'>
            <h5>Login</h5>
            <div className='form-row'>
            <label 
                htmlFor='name' 
                className='form-label'>
                Name
            </label>
            <input 
                type='text' 
                className='input-form' 
                id='name'
                // value={name}
            />
            </div>
            <div className='form-row'>
            <label 
                htmlFor='email'
                className='form-label'>
                Email
            </label>
            <input 
                type='email' 
                className='input-form' 
                id='email'
                // value={email}
            />
            </div>
        </form>
        <button type='submit'>Login</button>
    </div>
  );
}

export default App;
