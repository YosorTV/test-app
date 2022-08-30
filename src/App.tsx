import { useCallback, useEffect, useState } from 'react'
import { Counter, RandomList } from './Components'

import './App.css'

function App() {
  const [count, setCount] = useState<number>(0);
  const [list, setList] = useState<number[]>([]);

  const applyCounter = useCallback(() => {
    const num = Math.floor(Math.random() * 101);
    
    setCount(count => count + 1)
    setList([...list, num])
  }, [list, count]);
    
  useEffect(() => {
    const timer = setTimeout(() => applyCounter(), 3000);

    return () => clearTimeout(timer);
  }, [list]);
  
  return (
    <div className="App">
      <div className="card">
        <button onClick={applyCounter}> Increase </button>
        <Counter value={count}/>
        <RandomList listData={list} />
      </div>
    </div>
  )
}

export default App
