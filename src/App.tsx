import { useState, useEffect } from 'react';
import { BotaoMais } from './components/BotaoMais';
import { BotaoMenos } from './components/BotaoMenos';
import "./App.css";

function App() {
  const [n, setN] = useState(0);

  useEffect(() => {
    document.addEventListener("plus", (event: CustomEventInit) => {
      setN(n + event.detail.num)
    });
    document.addEventListener("minus", (event: CustomEventInit) => {
      setN(n - event.detail.num)
    });
  });
  
  return (
    <div className="App">
      <h1>Contador</h1>
      <BotaoMais />
      <p>{n}</p>
      <BotaoMenos />
    </div>
  );
}

export default App;
