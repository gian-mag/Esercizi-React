import React from 'react';
import Image from './image'
import Button from './button';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Image src="./JESUSSCRIPT.png" alt="JesusScript" />
        <Button content='Apri'></Button>
      </header>
    </div>
  );
}

export default App;
