import { useState } from 'react';
import { BotaoMais } from './components/BotaoMais';
import { BotaoMenos } from './components/BotaoMenos';

function App() {
  const [n, setN] = useState(0);

  const handleMore = (num: number) => {
    setN(n + num)
  }
  const handleMinus = (num: number) => {
      setN(n - num)
  }
  return (
    <div className="App">
      <h1>Contador</h1>
      <BotaoMais clickFn={handleMore} />
      <p>{n}</p>
      <BotaoMenos clickFnm={handleMinus}/>
    </div>
  );
}

export default App;
