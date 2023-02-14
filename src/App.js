import './App.css';


function App() {
  return (
    <div className='App'>
        <form className='form'>
            <h3>Login</h3>
            <div className='form-row'>
            <label className='label-form'>
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
            <label className='label-form'>
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
