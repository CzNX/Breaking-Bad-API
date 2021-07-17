
import { useState } from 'react';
import './App.css';
import Header from './comps/Header/Header';
import Main from './comps/Main/Main';


function App() {
  const [input, setinput] = useState('');
  return (
    <div className="App">
      <Header setinput={setinput} input={input} />
      <Main input={input} />
    </div>
  );
}

export default App;
