import React from 'react';
import Home from './pages/Home ';

function App() {
  console.log(window.ipcRenderer);

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
